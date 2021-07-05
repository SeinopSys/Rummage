import { Category } from 'src/types/category';
import { Word } from 'src/types/word';

export const WORD_THIRTY: Word = {
  native: 'тридцать',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  number: 30,
  place: 10,
};

export const WORD_FORTY: Word = {
  native: 'сорок',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  number: 40,
  place: 10,
};

export const WORD_FIFTY: Word = {
  native: 'пятьдесят',
  stressIndex: 7,
  categories: [Category.NUMBERS],
  number: 50,
  place: 10,
};

export const WORD_SIXTY: Word = {
  native: 'шестьдесят',
  stressIndex: 8,
  categories: [Category.NUMBERS],
  number: 60,
  place: 10,
};

export const WORD_SEVENTY: Word = {
  native: 'семьдесят',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  number: 70,
  place: 10,
};

export const WORD_EIGHTY: Word = {
  native: 'восемьдесят',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  number: 80,
  place: 10,
};

export const WORD_NINETY: Word = {
  native: 'девяносто',
  stressIndex: 5,
  categories: [Category.NUMBERS],
  number: 90,
  place: 10,
};

export const WORD_ONE_HUNDRED: Word = {
  native: 'сто',
  categories: [Category.NUMBERS],
  number: 100,
  place: 100,
};

export const numbers30To100: Word[] = [
  WORD_THIRTY,
  WORD_FORTY,
  WORD_FIFTY,
  WORD_SIXTY,
  WORD_SEVENTY,
  WORD_EIGHTY,
  WORD_NINETY,
  WORD_ONE_HUNDRED,
];
