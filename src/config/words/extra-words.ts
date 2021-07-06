import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { Word } from 'src/types/word';

export const extraWords: Word[] = [
  {
    native: 'лиса',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.ANIMALS],
  },
  {
    native: 'ворона',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.ANIMALS],
    fixedDecoys: ['воробей'],
  },
  {
    native: 'всё',
    gender: Gender.MASCULINE,
    categories: [Category.EXISTENCE],
  },
  {
    native: 'сейчас',
    stressIndex: 4,
    categories: [Category.DECLARATIVE_WORD],
    fixedDecoys: ['мост'],
  },
  {
    native: 'Печ',
    categories: [Category.GEOGRAPHICAL_NAMES],
    fixedDecoys: ['печь'],
  },
  {
    native: 'обычно',
    stressIndex: 2,
    categories: [Category.FREQUENCY, Category.CONJUNCTIVE_WORD],
    fixedDecoys: [],
  },
  {
    native: 'уже',
    stressIndex: 2,
    categories: [Category.FREQUENCY, Category.CONJUNCTIVE_WORD],
    fixedDecoys: ['ужасно'],
  },
  {
    native: 'ужасно',
    stressIndex: 2,
    categories: [Category.ADVERB],
    fixedDecoys: ['уже'],
  },
  {
    native: 'плохо',
    stressIndex: 2,
    categories: [Category.ADVERB],
  },
  {
    native: 'ещё',
    categories: [Category.ADVERB],
    fixedDecoys: ['уже'],
  },
  {
    native: 'его',
    stressIndex: 2,
    categories: [Category.PERSONAL_PRONOUN, Category.POSSESSION],
    fixedDecoys: ['её', 'их'],
  },
  {
    native: 'её',
    categories: [Category.PERSONAL_PRONOUN, Category.POSSESSION],
    fixedDecoys: ['его', 'их', 'ещё'],
  },
  {
    native: 'их',
    categories: [Category.PERSONAL_PRONOUN, Category.POSSESSION],
    fixedDecoys: ['её', 'его'],
  },
  {
    native: 'сегодня',
    stressIndex: 3,
    categories: [Category.TIME],
    fixedDecoys: ['год'],
  },
  {
    native: 'вечер',
    stressIndex: 1,
    categories: [Category.TIME],
    fixedDecoys: ['вечером'],
  },
  {
    native: 'вечером',
    stressIndex: 1,
    categories: [Category.TIME],
    fixedDecoys: ['вечер'],
  },
  {
    native: 'работать',
    stressIndex: 3,
    categories: [Category.PROFESSION],
    fixedDecoys: ['робот'],
  },
  {
    native: 'знать',
    categories: [Category.CONCEPTS],
  },
  {
    native: 'певица',
    stressIndex: 3,
    categories: [Category.MUSIC, Category.PROFESSION],
    gender: Gender.FEMININE,
  },
  {
    native: 'певец',
    stressIndex: 3,
    categories: [Category.MUSIC, Category.PROFESSION],
    gender: Gender.MASCULINE,
  },
  {
    native: 'глагол',
    stressIndex: 4,
    categories: [Category.GRAMMAR],
    gender: Gender.MASCULINE,
  },
  {
    native: 'прилагательное',
    stressIndex: 6,
    categories: [Category.GRAMMAR],
    gender: Gender.NEUTER,
  },
  {
    native: 'существительное',
    stressIndex: 7,
    categories: [Category.GRAMMAR],
    gender: Gender.NEUTER,
  },
];
