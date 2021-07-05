import { Category } from 'src/types/category';
import { Word } from 'src/types/word';

export const WORD_ONE: Word = {
  native: 'один',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  number: 1,
  place: 1,
};

export const WORD_TWO: Word = {
  native: 'два',
  categories: [Category.NUMBERS],
  fixedDecoys: ['двор'],
  number: 2,
  place: 1,
};

export const WORD_THREE: Word = {
  native: 'три',
  categories: [Category.NUMBERS],
  number: 3,
  place: 1,
};

export const WORD_FOUR: Word = {
  native: 'четыре',
  stressIndex: 3,
  categories: [Category.NUMBERS],
  number: 4,
  place: 1,
};

export const WORD_FIVE: Word = {
  native: 'пять',
  categories: [Category.NUMBERS],
  number: 5,
  place: 1,
};

export const WORD_SIX: Word = {
  native: 'шесть',
  categories: [Category.NUMBERS],
  number: 6,
  place: 1,
  fixedDecoys: ['шест'],
};

export const WORD_SEVEN: Word = {
  native: 'семь',
  categories: [Category.NUMBERS],
  fixedDecoys: ['восемь', 'семья'],
  number: 7,
  place: 1,
};

export const WORD_EIGHT: Word = {
  native: 'восемь',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  fixedDecoys: ['семь'],
  number: 8,
  place: 1,
};

export const WORD_NINE: Word = {
  native: 'девять',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  fixedDecoys: ['десять'],
  number: 9,
  place: 1,
};

export const WORD_TEN: Word = {
  native: 'десять',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  fixedDecoys: ['девять'],
  number: 10,
  place: 10,
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
