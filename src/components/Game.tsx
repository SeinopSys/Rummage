import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MeaningButton } from 'components/MeaningButton';
import { WordWithStress } from 'components/WordWithStress';
import { random } from 'lodash';
import { Trans, useTranslation } from 'next-i18next';
import { ChangeEventHandler, useCallback, useEffect, useMemo, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, CustomInput, Row } from 'reactstrap';
import { AppDispatch } from 'src/store';
import { RootState } from 'src/store/rootReducer';
import { gameActions } from 'src/store/slices';
import createPersistedState from 'use-persisted-state';

const useCursiveState = createPersistedState('cursive');
const useStressState = createPersistedState('stress');

export const Game: VFC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [cursive, setCursive] = useCursiveState(false);
  const [stress, setStress] = useStressState(true);
  const { word, streak, decoyMeanings } = useSelector((state: RootState) => state.game);
  const allMeanings = useMemo<string[]>(() => {
    if (!word || !decoyMeanings) return [];

    const finalArray = [...decoyMeanings];
    finalArray.splice(random(0, finalArray.length - 1), 0, word.key);
    return finalArray;
  }, [word, decoyMeanings]);

  const restart = useCallback(() => {
    dispatch(gameActions.setStreak(0));
    dispatch(gameActions.selectWord());
  }, [dispatch]);
  const handleGuess = useCallback(
    (meaningKey: string) => {
      if (!word) return;

      if (meaningKey !== word.key) {
        restart();
        return;
      }

      dispatch(gameActions.setStreak(streak + 1));
      dispatch(gameActions.selectWord());
    },
    [dispatch, restart, streak, word],
  );
  const handleCursiveChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setCursive(e.target.checked);
    },
    [setCursive],
  );
  const handleStressChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setStress(e.target.checked);
    },
    [setStress],
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
        {!word ? (
          <Button size="lg" onClick={restart}>
            {t('game:startGame')}
          </Button>
        ) : (
          <>
            <p className="display-4 font-weight-bold text-center">
              <WordWithStress {...word} cursive={cursive} stress={stress} />
            </p>
            {allMeanings.length > 0 && (
              <>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  {allMeanings.map((meaningKey, i) => (
                    <MeaningButton key={meaningKey} t={t} meaningKey={meaningKey} onGuess={handleGuess} nth={i + 1} />
                  ))}
                </div>
                <p className="text-muted mb-0 mt-3">
                  <FontAwesomeIcon icon="info" fixedWidth />
                  {t('game:answerViaKeyboard')}
                </p>
              </>
            )}
          </>
        )}
      </CardBody>
      <CardFooter>
        <Row className="justify-content-center justify-content-lg-between align-items-center">
          <Col xs="auto" className="h4 my-2">
            <Trans t={t} i18nKey="game:correctGuess" count={streak}>
              <b>0</b>1
            </Trans>
          </Col>
          <Col xs="auto">
            <CustomInput id="cursive" label={t('game:nativeCursive')} type="checkbox" checked={cursive} onChange={handleCursiveChange} />
            <CustomInput
              id="cursive"
              label={
                <Trans t={t} i18nKey="game:showStress">
                  0<code>1</code>
                </Trans>
              }
              type="checkbox"
              checked={stress}
              onChange={handleStressChange}
            />
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};
