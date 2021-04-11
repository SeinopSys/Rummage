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
  },
  {
    native: 'всё',
    gender: Gender.MASCULINE,
    categories: [Category.EXISTENCE],
  },
];
