import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { Word } from 'src/types/word';

export const lesson01Block01Words: Word[] = [
  {
    native: 'семья',
    stressIndex: 4,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'бабушка',
    stressIndex: 1,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'дедушка',
    stressIndex: 1,
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'мама',
    stressIndex: 1,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'мать',
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'папа',
    stressIndex: 1,
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'отец',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'жена',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'дочь',
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'внук',
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'внучка',
    stressIndex: 2,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'тётя',
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'дядя',
    stressIndex: 1,
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'ребёнок',
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'дети',
    stressIndex: 1,
    gender: Gender.MASCULINE,
    plural: true,
    categories: [Category.FAMILY, Category.PLURAL],
  },
  {
    native: 'родитель',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'родители',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    plural: true,
    categories: [Category.FAMILY, Category.PLURAL],
  },
  {
    native: 'дочка',
    stressIndex: 1,
    gender: Gender.FEMININE,
    categories: [Category.FAMILY],
  },
  {
    native: 'сынок',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    plural: true,
    categories: [Category.FAMILY],
  },
];
