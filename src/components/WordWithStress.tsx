import classNames from 'classnames';
import { VFC } from 'react';
import { Word } from 'src/types/word';
import styles from 'modules/WordWithStress.module.scss';

/**
 * This character adds an acute accent to the character preceding it
 *
 * @see https://www.compart.com/en/unicode/U+0301
 */
const COMBINING_ACUTE_ACCENT = '\u0301';

interface PropTypes extends Pick<Word, 'native' | 'stressIndex'> {
  cursive: boolean;
  stress: boolean;
}

export const WordWithStress: VFC<PropTypes> = ({ native, stressIndex, cursive, stress }) => {
  // noinspection SuspiciousTypeOfGuard
  const word =
    !stress || typeof stressIndex !== 'number' ? (
      // Directly return the native word if no stress index is specified
      native
    ) : (
      <>
        {native.substring(0, stressIndex)}
        <span className={styles.stressMark}>{COMBINING_ACUTE_ACCENT}</span>
        {native.substring(stressIndex)}
      </>
    );

  return <span className={classNames({ [styles.textCursive]: cursive })}>{word}</span>;
};
