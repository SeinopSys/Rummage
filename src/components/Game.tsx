import { MeaningButton } from 'components/MeaningButton';
import { random } from 'lodash';
import { Trans, useTranslation } from 'next-i18next';
import { useCallback, useMemo, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { AppDispatch } from 'src/store';
import { RootState } from 'src/store/rootReducer';
import { gameActions } from 'src/store/slices';

export const Game: VFC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { word, streak, decoyMeanings } = useSelector((state: RootState) => state.game);

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

  const allMeanings = useMemo<string[]>(() => {
    if (!word || !decoyMeanings) return [];

    const finalArray = [...decoyMeanings];
    finalArray.splice(random(0, finalArray.length - 1), 0, word.key);
    return finalArray;
  }, [word, decoyMeanings]);

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
            <p className="display-4 font-weight-bold text-center">{word.native}</p>
            {allMeanings.length > 0 && (
              <div className="d-flex justify-content-center align-items-center">
                {allMeanings.map((meaningKey) => (
                  <MeaningButton key={meaningKey} t={t} meaningKey={meaningKey} onGuess={handleGuess} />
                ))}
              </div>
            )}
          </>
        )}
      </CardBody>
      <CardFooter>
        <Trans t={t} i18nKey="game:correctGuess" count={streak}>
          <b>0</b>1
        </Trans>
      </CardFooter>
    </Card>
  );
};
