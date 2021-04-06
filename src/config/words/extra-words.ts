import { Category, Gender, Word } from 'src/types/word';

export const extraWords: Word[] = [
  {
    native: 'лиса',
    key: 'lisa',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.ANIMALS],
  },
  {
    native: 'ворона',
    key: 'vorona',
    stressIndex: 3,
    gender: Gender.FEMININE,
    categories: [Category.ANIMALS],
  },
  {
    native: 'всё',
    key: 'vsyo',
    gender: Gender.MASCULINE,
    categories: [Category.EXISTENCE],
  },
];
