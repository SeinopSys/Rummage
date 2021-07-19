import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { Word } from 'src/types/word';

export const WORD_MONDAY: Word = {
  native: 'понедельник',
  stressIndex: 5,
  gender: Gender.MASCULINE,
  categories: [Category.WEEKDAYS],
};

export const WORD_TUESDAY: Word = {
  native: 'вторник',
  stressIndex: 2,
  gender: Gender.MASCULINE,
  categories: [Category.WEEKDAYS],
};

export const WORD_WEDNESDAY: Word = {
  native: 'среда',
  stressIndex: 4,
  gender: Gender.FEMININE,
  categories: [Category.WEEKDAYS],
};

export const WORD_THURSDAY: Word = {
  native: 'четверг',
  stressIndex: 4,
  gender: Gender.MASCULINE,
  categories: [Category.WEEKDAYS],
};

export const WORD_FRIDAY: Word = {
  native: 'пятница',
  stressIndex: 1,
  gender: Gender.MASCULINE,
  categories: [Category.WEEKDAYS],
};

export const WORD_SATURDAY: Word = {
  native: 'суббота',
  stressIndex: 4,
  gender: Gender.FEMININE,
  categories: [Category.WEEKDAYS],
};

export const WORD_SUNDAY: Word = {
  native: 'воскресенье',
  stressIndex: 7,
  gender: Gender.NEUTER,
  categories: [Category.WEEKDAYS],
};

export const daysOfTheWeek: Word[] = [WORD_MONDAY, WORD_TUESDAY, WORD_WEDNESDAY, WORD_THURSDAY, WORD_FRIDAY, WORD_SATURDAY, WORD_SUNDAY];
