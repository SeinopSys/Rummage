import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { MeaningButton } from 'components/MeaningButton';
import { Preferences } from 'components/Preferences';
import { WordWithStress } from 'components/WordWithStress';
import { shuffle, intersection } from 'lodash';
import { Trans, useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useState, VFC } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, Progress, Row } from 'reactstrap';
import { allWordsArray } from 'src/config/words';
import { usePreferences } from 'src/hooks/usePreferences';
import { AppDispatch } from 'src/store';
import { RootState } from 'src/store/rootReducer';
import { wordMeaningActions } from 'src/store/slices';
import { GameState } from 'src/types/game-state';
import { Word } from 'src/types/word';
import { normalizeMeanings } from 'src/utils/normalize-meanings';

export const WordMeaningGame: VFC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [lastSelectedMeaning, setLastSelectedMeaning] = useState<string | undefined>();
  const preferences = usePreferences(false, true, true);
  const { wordIndex, streak, scrambledWords, decoyMeanings, state } = useSelector((s: RootState) => s.wordMeaning);
  const word: Word | undefined = scrambledWords && scrambledWords[wordIndex];
  const isWinner: boolean = streak === allWordsArray.length;
  const winStatusColor = isWinner ? 'success' : 'danger';
  const allMeanings = useMemo<string[]>(() => {
    if (!word || !decoyMeanings) return [];

    return shuffle([...decoyMeanings, word.native]);
  }, [word, decoyMeanings]);

  const restart = useCallback(() => {
    batch(() => {
      dispatch(wordMeaningActions.startGame());
    });
  }, [dispatch]);
  const handleGuess = useCallback(
    (meaningKey: string) => {
      if (!word) return;
      batch(() => {
        setLastSelectedMeaning(meaningKey);

        if (meaningKey !== word.native) {
          /**
           * Maybe the word simply has identical meaning in the current site language, let's make
           * sure the user isn't punished for what could be a perfectly correct answer based
           * on the text displayed
           */
          const chosenMeaning = normalizeMeanings(t(`words:${meaningKey}`));
          const correctMeaning = normalizeMeanings(t(`words:${word.native}`));
          const match = intersection(chosenMeaning, correctMeaning).length > 0;
          if (!match) {
            dispatch(wordMeaningActions.endGame());
            return;
          }
        }

        dispatch(wordMeaningActions.advanceWord());
      });
    },
    [dispatch, t, word],
  );

  useEffect(() => {
    if (!word) return;

    const handleKeypress = (e: KeyboardEvent) => {
      const numberKey = parseInt(e.key, 10);
      if (isNaN(numberKey) || !isFinite(numberKey) || numberKey < 1 || numberKey > allMeanings.length) {
        return;
      }

      e.preventDefault();
      handleGuess(allMeanings[numberKey - 1]);
    };
    window.addEventListener('keypress', handleKeypress);

    return () => {
      window.removeEventListener('keypress', handleKeypress);
    };
  }, [allMeanings, handleGuess, word]);

  return (
    <Card className="mb-3">
      <CardHeader>{t('game:whatsTheMeaning')}</CardHeader>
      <CardBody>
        {state === GameState.INITIAL && (
          <>
            <p>{t('game:howToPlay', { wordCount: t('common:wordCount', { count: allWordsArray.length }) })}</p>
            <Button size="lg" onClick={restart}>
              {t('game:startGame')}
            </Button>
          </>
        )}
        {state !== GameState.INITIAL && word && (
          <>
            <p className="display-4 font-weight-bold text-center">
              <WordWithStress
                {...word}
                cursive={preferences.cursive}
                stress={preferences.stress}
                gender={preferences.gender ? word.gender : undefined}
              />
            </p>
            {allMeanings.length > 0 && (
              <>
                <Row noGutters className="justify-content-center align-items-center">
                  {allMeanings.map((meaningNative, i) => (
                    <Col xs={12} md={6} lg="auto" key={meaningNative}>
                      <div className="py-2 p-md-1">
                        <MeaningButton
                          t={t}
                          meaningKey={meaningNative}
                          onGuess={handleGuess}
                          nth={i + 1}
                          correct={state === GameState.OVER ? meaningNative === word?.native : undefined}
                          lastSelected={lastSelectedMeaning === meaningNative}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
                <p className="text-muted mb-0 mt-3 d-none d-md-block">
                  <FontAwesomeIcon icon="info" fixedWidth />
                  {t('game:answerViaKeyboard')}
                </p>
              </>
            )}
          </>
        )}
        {state === GameState.OVER && (
          <Alert color={winStatusColor} className="mb-0 mt-3">
            <p>{isWinner ? t('game:youWon') : t('game:youLost')}</p>
            <Button onClick={restart}>{t('game:startOver')}</Button>
          </Alert>
        )}
      </CardBody>
      <CardFooter>
        <Row className="justify-content-center justify-content-lg-between align-items-center">
          <Col xs="auto" className="h4 my-2">
            <Trans t={t} i18nKey="game:correctGuess" count={streak}>
              <b className={classNames(state === GameState.OVER && `text-${winStatusColor}`)}>0</b>1
            </Trans>
            <Progress
              value={100 * (streak / allWordsArray.length)}
              color={state === GameState.OVER ? winStatusColor : 'primary'}
              animated={state !== GameState.OVER && state !== GameState.INITIAL}
              className="mt-2"
            />
          </Col>
          <Col xs="auto">
            <Preferences {...preferences} />
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};
