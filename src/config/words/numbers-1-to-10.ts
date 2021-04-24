import { Category } from 'src/types/category';
import { Word } from 'src/types/word';

export const WORD_ONE: Word = {
  native: 'один',
  stressIndex: 2,
  categories: [Category.NUMBERS],
};

export const WORD_TWO: Word = {
  native: 'два',
  categories: [Category.NUMBERS],
};

export const WORD_THREE: Word = {
  native: 'три',
  categories: [Category.NUMBERS],
};

export const WORD_FOUR: Word = {
  native: 'четыре',
  stressIndex: 3,
  categories: [Category.NUMBERS],
};

export const WORD_FIVE: Word = {
  native: 'пять',
  categories: [Category.NUMBERS],
};

export const WORD_SIX: Word = {
  native: 'шесть',
  categories: [Category.NUMBERS],
};

export const WORD_SEVEN: Word = {
  native: 'семь',
  categories: [Category.NUMBERS],
};

export const WORD_EIGHT: Word = {
  native: 'восемь',
  stressIndex: 1,
  categories: [Category.NUMBERS],
};

export const WORD_NINE: Word = {
  native: 'девять',
  stressIndex: 1,
  categories: [Category.NUMBERS],
};

export const WORD_TEN: Word = {
  native: 'десять',
  stressIndex: 1,
  categories: [Category.NUMBERS],
};

export const numbers1To10: Word[] = [
  WORD_ONE,
  WORD_TWO,
  WORD_THREE,
  WORD_FOUR,
  WORD_FIVE,
  WORD_SIX,
  WORD_SEVEN,
  WORD_EIGHT,
  WORD_NINE,
  WORD_TEN,
];
