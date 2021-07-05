import { Category } from 'src/types/category';
import { Word } from 'src/types/word';

export const WORD_TWO_HUNDRED: Word = {
  native: 'двести',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  number: 200,
  place: 100,
  fixedDecoys: ['два', 'двенадцать', 'двадцать'],
};

export const WORD_THREE_HUNDRED: Word = {
  native: 'триста',
  stressIndex: 2,
  categories: [Category.NUMBERS],
  number: 300,
  place: 100,
  fixedDecoys: ['три', 'тринадцать', 'тридцать'],
};

export const WORD_FOUR_HUNDRED: Word = {
  native: 'четыреста',
  stressIndex: 3,
  categories: [Category.NUMBERS],
  number: 400,
  place: 100,
  fixedDecoys: ['четыре', 'четырнадцать', 'сорок'],
};

export const WORD_FIVE_HUNDRED: Word = {
  native: 'пятьсот',
  stressIndex: 5,
  categories: [Category.NUMBERS],
  number: 500,
  place: 100,
  fixedDecoys: ['пять', 'пятнадцать', 'пятьдесят'],
};

export const WORD_SIX_HUNDRED: Word = {
  native: 'шестьсот',
  stressIndex: 6,
  categories: [Category.NUMBERS],
  number: 600,
  place: 100,
  fixedDecoys: ['шесть', 'шестнадцать', 'шестьдесят'],
};

export const WORD_SEVEN_HUNDRED: Word = {
  native: 'семьсот',
  stressIndex: 5,
  categories: [Category.NUMBERS],
  number: 700,
  place: 100,
  fixedDecoys: ['семь', 'семнадцать', 'семьдесят'],
};

export const WORD_EIGHT_HUNDRED: Word = {
  native: 'восемьсот',
  stressIndex: 7,
  categories: [Category.NUMBERS],
  number: 800,
  place: 100,
  fixedDecoys: ['восемь', 'восемнадцать', 'восемьдесят'],
};

export const WORD_NINE_HUNDRED: Word = {
  native: 'девятьсот',
  stressIndex: 7,
  categories: [Category.NUMBERS],
  number: 900,
  place: 100,
  fixedDecoys: ['девять', 'девятнадцать', 'девяносто'],
};

export const WORD_ONE_THOUSAND: Word = {
  native: 'тысяча',
  stressIndex: 1,
  categories: [Category.NUMBERS],
  number: 1000,
  place: 1000,
  fixedDecoys: ['один', 'одиннадцать', 'сто'],
};

export const numbers200To1000: Word[] = [
  WORD_TWO_HUNDRED,
  WORD_THREE_HUNDRED,
  WORD_FOUR_HUNDRED,
  WORD_FIVE_HUNDRED,
  WORD_SIX_HUNDRED,
  WORD_SEVEN_HUNDRED,
  WORD_EIGHT_HUNDRED,
  WORD_NINE_HUNDRED,
  WORD_ONE_THOUSAND,
];
