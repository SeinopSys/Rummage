import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { Word } from 'src/types/word';

export const lesson01Block02Words: Word[] = [
  {
    native: 'школа',
    stressIndex: 2,
    gender: Gender.FEMININE,
    categories: [Category.STUDYING],
  },
  {
    native: 'машина',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.TRANSPORTATION],
  },
  {
    native: 'тетрадь',
    stressIndex: 4,
    gender: Gender.FEMININE,
    categories: [Category.STUDYING],
  },
  {
    native: 'площадь',
    stressIndex: 2,
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'лекарство',
    stressIndex: 3,
    gender: Gender.NEUTER,
    categories: [Category.HEALTH],
  },
  {
    native: 'письмо',
    stressIndex: 5,
    gender: Gender.NEUTER,
    categories: [Category.COMMUNICATION],
  },
  {
    native: 'море',
    stressIndex: 1,
    gender: Gender.NEUTER,
    categories: [Category.NATURE],
  },
  {
    native: 'ресторан',
    stressIndex: 6,
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.FOOD],
  },
  {
    native: 'университет',
    stressIndex: 9,
    gender: Gender.MASCULINE,
    categories: [Category.STUDYING, Category.LOCATIONS],
  },
  {
    native: 'словарь',
    stressIndex: 4,
    gender: Gender.MASCULINE,
    categories: [Category.WRITING],
  },
  {
    native: 'аэропорт',
    stressIndex: 5,
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.AIR_TRAVEL],
  },
  {
    native: 'аптека',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.HEALTH],
  },
  {
    native: 'пиццерия',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.FOOD],
  },
  {
    native: 'кафе',
    gender: Gender.NEUTER,
    categories: [Category.LOCATIONS, Category.BEVERAGES],
  },
  {
    native: 'гимназия',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.EDUCATION],
  },
  {
    native: 'видеотека',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.ENTERTAINMENT],
  },
  {
    native: 'дискотека',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.ENTERTAINMENT],
  },
  {
    native: 'стадион',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.ENTERTAINMENT],
  },
  {
    native: 'гостиница',
    gender: Gender.FEMININE,
    categories: [Category.LOCATIONS, Category.ACCOMMODATION],
  },
];
