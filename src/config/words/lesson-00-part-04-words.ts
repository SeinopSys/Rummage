import { WORD_FIVE } from 'src/config/words/numbers-1-to-10';
import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { PersonalPronoun } from 'src/types/personal-pronoun';
import { Tense } from 'src/types/tense';
import { Word } from 'src/types/word';

export const lesson00Part04Words: Word[] = [
  {
    native: 'Пётр',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_NAMES],
  },
  {
    native: 'тюль',
  },
  {
    native: 'плюш',
  },
  WORD_FIVE,
  {
    native: 'люблю',
    stressIndex: 4,
    tense: Tense.PRESENT,
    personalPronoun: PersonalPronoun.FIRST_PERSON_SINGULAR,
  },
  {
    native: 'Ян',
    gender: Gender.MASCULINE,
  },
  {
    native: 'ёлка',
    gender: Gender.FEMININE,
    categories: [Category.PLANTS],
  },
  {
    native: 'юрта',
    stressIndex: 0,
    gender: Gender.MASCULINE,
    categories: [Category.BUILDINGS],
  },
  {
    native: 'яхта',
    stressIndex: 0,
    gender: Gender.FEMININE,
    categories: [Category.TRANSPORTATION, Category.LUXURY],
  },
  {
    native: 'друзья',
    stressIndex: 5,
    gender: Gender.MASCULINE,
    plural: true,
    categories: [Category.RELATIONS],
  },
  {
    native: 'съел',
    tense: Tense.PAST,
    personalPronoun: PersonalPronoun.THIRD_PERSON_SINGULAR,
  },
  {
    native: 'пьёт',
    tense: Tense.PRESENT,
    personalPronoun: PersonalPronoun.THIRD_PERSON_SINGULAR,
    categories: [Category.BEVERAGES],
  },
  {
    native: 'чай',
    gender: Gender.MASCULINE,
    categories: [Category.BEVERAGES],
  },
  {
    native: 'час',
    gender: Gender.MASCULINE,
    categories: [Category.TIME],
  },
  {
    native: 'щи',
    gender: Gender.MASCULINE,
    categories: [Category.FOOD],
  },
  {
    native: 'мяч',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS],
  },
  {
    native: 'ключ',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS],
  },
  {
    native: 'плащ',
    gender: Gender.MASCULINE,
    categories: [Category.CLOTHES],
  },
  {
    native: 'что',
    categories: [Category.DECLARATIVE_WORD, Category.QUESTION_WORD],
  },
];
