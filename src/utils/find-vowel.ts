import { Alphabet } from 'src/utils/alphabet';

const RUSSIAN_VOWELS = [
  // JO has to come first to ensure it is marked as stressed if it's present
  Alphabet.jo,
  Alphabet.i,
  Alphabet.e,
  Alphabet.a,
  Alphabet.y,
  Alphabet.u,
  Alphabet.o,
  Alphabet.je,
  Alphabet.ja,
  Alphabet.ju,
].reduce((acc, c) => [...acc, c, c.toUpperCase()], [] as string[]);

/**
 * Finds the index of stress in words for which there is no defined stress
 */
export const findUnknownStressedVowel = (word: string): number | undefined => {
  let stressIndex: number | undefined;
  RUSSIAN_VOWELS.some((vowel) => {
    const index = word.indexOf(vowel);
    const match = index !== -1;
    if (match) {
      stressIndex = index;
    }
    return match;
  });
  return stressIndex;
};
