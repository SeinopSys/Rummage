import classNames from 'classnames';
import { GenderSymbols, GenderSymbolsProps } from 'components/GenderSymbols';
import styles from 'modules/WordWithStress.module.scss';
import { useMemo, VFC } from 'react';
import { Word } from 'src/types/word';
import { Alphabet } from 'src/utils/alphabet';
import { findUnknownStressedVowel } from 'src/utils/find-vowel';

/**
 * This character adds an acute accent to the character preceding it
 *
 * @see https://www.compart.com/en/unicode/U+0301
 * @see https://en.wikipedia.org/wiki/Acute_accent
 */
const COMBINING_ACUTE_ACCENT = '\u0301';
/**
 * This character adds a diaeresis (umlaut) to the character preceding it
 *
 * @see https://www.compart.com/en/unicode/U+0308
 * @see https://en.wikipedia.org/wiki/Diaeresis_(diacritic)
 */
const COMBINING_DIAERESIS = '\u0308';

interface PropTypes extends Pick<Word, 'native' | 'stressIndex'>, GenderSymbolsProps {
  cursive: boolean;
  stress: boolean;
}

export const WordWithStress: VFC<PropTypes> = ({ native, stressIndex, cursive, stress, gender }) => {
  const computedStressIndex = useMemo<typeof stressIndex>(
    () => (typeof stressIndex !== 'undefined' ? stressIndex : findUnknownStressedVowel(native)),
    [native, stressIndex],
  );
  let word: string | JSX.Element = native;

  // noinspection SuspiciousTypeOfGuard
  if (stress && typeof computedStressIndex === 'number') {
    const stressedCharacter = typeof computedStressIndex !== 'undefined' ? native[computedStressIndex] : undefined;
    const isJoStressed = stressedCharacter === Alphabet.jo;
    const isStressedCapital = typeof stressedCharacter !== 'undefined' && stressedCharacter.toUpperCase() === stressedCharacter;

    word = (
      <>
        {native.substring(0, computedStressIndex)}
        <span className={classNames(styles.stressMark, { [styles.capital]: isStressedCapital })}>
          {stressedCharacter === Alphabet.jo ? COMBINING_DIAERESIS : COMBINING_ACUTE_ACCENT}
        </span>
        {isJoStressed && Alphabet.je}
        {native.substring(isJoStressed ? computedStressIndex + 1 : computedStressIndex)}
      </>
    );
  }

  return (
    <span className={styles.word}>
      <span className={classNames({ [styles.textCursive]: cursive })}>{word}</span>
      <GenderSymbols gender={gender} />
    </span>
  );
};
