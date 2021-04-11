import { sampleSize } from 'lodash';
import { WordMeaningState } from 'src/store/state/word-meaning-state';

export const selectDecoyMeanings = (state: WordMeaningState): string[] | undefined => {
  if (!state.scrambledWords) return undefined;

  const newWord = state.scrambledWords[state.wordIndex];
  if (!newWord) return undefined;

  const potentialDecoys = state.scrambledWords.slice();
  potentialDecoys.splice(state.wordIndex, 1);
  return sampleSize(potentialDecoys, 3).map((el) => el.native);
};
