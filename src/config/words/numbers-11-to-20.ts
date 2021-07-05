import { Category } from 'src/types/category';
import { Word } from 'src/types/word';

export const WORD_ELEVEN: Word = {
  native: 'одиннадцать',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  number: 11,
};

export const WORD_TWELVE: Word = {
  native: 'двенадцать',
  stressIndex: 4,
  categories: [Category.NUMBERS],
  number: 12,
};

export const WORD_THIRTEEN: Word = {
  native: 'тринадцать',
  stressIndex: 4,
  categories: [Category.NUMBERS],
  number: 13,
};

export const WORD_FOURTEEN: Word = {
  native: 'четырнадцать',
  stressIndex: 3,
  categories: [Category.NUMBERS],
  number: 14,
};

export const WORD_FIFTEEN: Word = {
  native: 'пятнадцать',
  stressIndex: 4,
  categories: [Category.NUMBERS],
  number: 15,
};

export const WORD_SIXTEEN: Word = {
  native: 'шестнадцать',
  stressIndex: 5,
  categories: [Category.NUMBERS],
  number: 16,
};

export const WORD_SEVENTEEN: Word = {
  native: 'семнадцать',
  stressIndex: 4,
  categories: [Category.NUMBERS],
  fixedDecoys: ['восемнадцать'],
  number: 17,
};

export const WORD_EIGHTEEN: Word = {
  native: 'восемнадцать',
  stressIndex: 6,
  categories: [Category.NUMBERS],
  fixedDecoys: ['семнадцать'],
  number: 18,
};

export const WORD_NINETEEN: Word = {
  native: 'девятнадцать',
  stressIndex: 6,
  categories: [Category.NUMBERS],
  fixedDecoys: ['двадцать'],
  number: 19,
};

export const WORD_TWENTY: Word = {
  native: 'двадцать',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  fixedDecoys: ['девятнадцать', 'двенадцать'],
  number: 20,
  place: 10,
};

export const numbers11To20: Word[] = [
  WORD_ELEVEN,
  WORD_TWELVE,
  WORD_THIRTEEN,
  WORD_FOURTEEN,
  WORD_FIFTEEN,
  WORD_SIXTEEN,
  WORD_SEVENTEEN,
  WORD_EIGHTEEN,
  WORD_NINETEEN,
  WORD_TWENTY,
];
