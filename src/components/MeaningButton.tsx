import { TFunction } from 'i18next';
import { useCallback, VFC } from 'react';
import { Badge, Button } from 'reactstrap';

interface PropTypes {
  t: TFunction;
  onGuess: (meaningKey: string) => void;
  meaningKey: string;
  nth: number;
}

export const MeaningButton: VFC<PropTypes> = ({ t: tr, meaningKey, onGuess, nth }) => {
  const handleClick = useCallback(() => onGuess(meaningKey), [meaningKey, onGuess]);
  // Not having `t` here avoids a warning from the i18n Support IntelliJ IDEA Plug-in
  const meaningValue = tr(`words:${meaningKey}`);
  // Words can have multiple meanings, join them if that's the case
  const meaningText = Array.isArray(meaningValue) ? meaningValue.join(', ') : meaningValue;
  return (
    <Button className="m-1" onClick={handleClick}>
      <Badge color="light" className="mr-2">
        {nth}
      </Badge>
      {meaningText}
    </Button>
  );
};
