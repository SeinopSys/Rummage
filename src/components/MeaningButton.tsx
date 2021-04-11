import { TFunction } from 'i18next';
import { useCallback, useMemo, VFC } from 'react';
import { Badge, Button } from 'reactstrap';

interface PropTypes {
  t: TFunction;
  onGuess: (meaningKey: string) => void;
  meaningKey: string;
  nth: number;
  correct?: boolean;
  lastSelected?: boolean;
}

export const MeaningButton: VFC<PropTypes> = ({ t: tr, meaningKey, onGuess, nth, correct, lastSelected }) => {
  const handleClick = useCallback(() => onGuess(meaningKey), [meaningKey, onGuess]);
  // Not having `t` here avoids a warning from the i18n Support IntelliJ IDEA Plug-in
  const meaningValue = tr(`words:${meaningKey}`);
  // Words can have multiple meanings, join them if that's the case
  const meaningText = Array.isArray(meaningValue) ? meaningValue.join(', ') : meaningValue;
  const revealCorrect = typeof correct !== 'undefined';
  const color = useMemo(() => {
    if (revealCorrect) {
      if (correct) return 'success';
      if (lastSelected) return 'warning';
    }
    return 'dark';
  }, [correct, lastSelected, revealCorrect]);
  return (
    <Button
      block
      className="d-flex align-items-center"
      outline={!revealCorrect}
      color={color}
      disabled={revealCorrect}
      onClick={handleClick}
    >
      <Badge color="light" className="mr-2 d-none d-md-inline">
        {nth}
      </Badge>
      <span className="flex-grow-1">{meaningText}</span>
    </Button>
  );
};
