/**
 * Converts meanings to an array with all lowercase letters
 */
export const normalizeMeanings = (meanings: string | string[]): string[] => {
  const newMeanings = typeof meanings === 'string' ? [meanings] : meanings;
  return newMeanings.map((m) => m.toLowerCase());
};
