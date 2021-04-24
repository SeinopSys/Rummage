import { partition, sampleSize, shuffle } from 'lodash';
import { WordMeaningState } from 'src/store/state/word-meaning-state';
import { Word } from 'src/types/word';

const mapToNative = (words: Word[]) => words.map((word) => word.native);

const mergePartitionResults = (fixedArray: Word[], result: [Word[], Word[]]) => {
  const newFixedArray = result[0].length > 0 ? [...fixedArray, ...shuffle(result[0])] : fixedArray;
  return [newFixedArray, result[1]];
};

/**
 * Attempt to pick the lowest number of items for the start of the array that are still above the
 * minimum count
 *
 * @param array
 * @param minimumCount
 * @param divisor
 */
const tryReduceUntilPortion = <T>(array: T[], minimumCount: number, divisor = 5): T[] => {
  const dividedCount = Math.floor(array.length / divisor);
  if (dividedCount >= minimumCount) {
    return array.slice(0, dividedCount);
  }

  return tryReduceUntilPortion(array, minimumCount, divisor - 1);
};

/**
 * Improved decoy selection algorithm designed to maximize confusion and fool-age™
 * @param word Current word
 * @param potentialDecoys The array of all other words to reduce
 * @param count Maximum number of items to return
 * @returns `count` number of either `potentialDecoys` verbatim, or a filtered version of it based on `word`
 */
const reduceDecoyList = (word: Word, potentialDecoys: Word[], count: number): string[] => {
  let fixedDecoys: Word[] = [];
  let remainingDecoys: Word[] = potentialDecoys;

  // If we have pre-defined decoy words
  if (word.fixedDecoys && word.fixedDecoys.length > 0) {
    // And there's enough of them
    if (word.fixedDecoys.length >= count) {
      // Pick from those directly
      return sampleSize(word.fixedDecoys, count);
    }

    // If there aren't enough, partition the list and let the rest of the logic dictate the options
    const fixedDecoySet = new Set(word.fixedDecoys);
    [fixedDecoys, remainingDecoys] = mergePartitionResults(
      fixedDecoys,
      partition(remainingDecoys, (decoy) => fixedDecoySet.has(decoy.native)),
    );
  }

  const filterSteps: (() => boolean | void)[] = [
    () => {
      // Return only words with unknown or matching gender if gender is known
      if (typeof word.gender !== 'undefined') {
        remainingDecoys = remainingDecoys.filter((decoy) => typeof decoy.gender === 'undefined' || decoy.gender === word.gender);
      }
    },
    () => {
      // Prefer matching categories
      if (!word.categories || word.categories.length === 0) {
        return false;
      }

      const wordCategoriesSet = new Set(word.categories);
      [fixedDecoys, remainingDecoys] = mergePartitionResults(
        fixedDecoys,
        partition(remainingDecoys, (decoy) => decoy.categories && decoy.categories.some((cat) => wordCategoriesSet.has(cat))),
      );
    },
    () => {
      // Prefer same starting letter
      [fixedDecoys, remainingDecoys] = mergePartitionResults(
        fixedDecoys,
        partition(remainingDecoys, (decoy) => decoy.native[0] === word.native[0]),
      );
    },
    () => {
      // Prefer same length
      [fixedDecoys, remainingDecoys] = mergePartitionResults(
        fixedDecoys,
        partition(remainingDecoys, (decoy) => decoy.native.length === word.native.length),
      );
    },
  ];

  const checkEnoughFixedDecoys = () => fixedDecoys.length >= count;

  // Keep filtering until we have enough fixed results
  filterSteps.some((step) => {
    step();
    return checkEnoughFixedDecoys();
  });

  // If there are enough fixed items, just grab those
  if (checkEnoughFixedDecoys()) {
    // There are more relevant results towards the beginning, try to grab the smallest potion
    fixedDecoys = tryReduceUntilPortion(fixedDecoys, count);

    // Pick enough random items from the fixed list
    return mapToNative(sampleSize(fixedDecoys, count));
  }

  // If there is an insufficient amount of fixed items, grab some extras
  return mapToNative([...fixedDecoys, ...sampleSize(remainingDecoys, count - fixedDecoys.length)]);
};

export const selectDecoyMeanings = (state: WordMeaningState): string[] | undefined => {
  if (!state.scrambledWords) return undefined;

  const newWord = state.scrambledWords[state.wordIndex];
  if (!newWord) return undefined;

  const potentialDecoys = state.scrambledWords.slice();
  potentialDecoys.splice(state.wordIndex, 1);
  return reduceDecoyList(newWord, potentialDecoys, 3);
};
