import { Category, Gender, Word } from 'src/types/word';

export const lesson00Part03Words: Word[] = [
  {
    native: 'нет',
    key: 'nyet',
    gender: Gender.MASCULINE,
    categories: [Category.BOOLEAN],
  },
  {
    native: 'метр',
    key: 'myetr',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.TRANSPORTATION],
  },
  { native: 'лес', key: 'lyes', gender: Gender.MASCULINE, categories: [Category.NATURE] },
  {
    native: 'вес',
    key: 'vyes',
    gender: Gender.MASCULINE,
    categories: [Category.UNITS_OF_MEASUREMENT],
  },
  {
    native: 'арест',
    stressIndex: 2,
    key: 'aryest',
    gender: Gender.MASCULINE,
    categories: [Category.JUSTICE],
  },
  {
    native: 'привет',
    stressIndex: 4,
    key: 'privyet',
    gender: Gender.MASCULINE,
    categories: [Category.GREETINGS],
  },
  { native: 'где', key: 'gdye', gender: Gender.MASCULINE, categories: [Category.QUESTION_WORD] },
  {
    native: 'туалет',
    stressIndex: 4,
    key: 'tualyet',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'музей',
    stressIndex: 3,
    key: 'muzyej',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'буфет',
    stressIndex: 3,
    key: 'bufyet',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.FOOD],
  },
];
