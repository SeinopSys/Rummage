import { WORD_SEVEN, WORD_SIX } from 'src/config/words/numbers-1-to-10';
import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { PersonalPronoun } from 'src/types/personal-pronoun';
import { Tense } from 'src/types/tense';
import { Word } from 'src/types/word';

export const lesson00Part03Words: Word[] = [
  {
    native: 'нет',
    gender: Gender.MASCULINE,
    categories: [Category.BOOLEAN, Category.NEGATIVE_WORD],
  },
  {
    native: 'метр',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.TRANSPORTATION],
    fixedDecoys: ['метро'],
  },
  {
    native: 'лес',
    gender: Gender.MASCULINE,
    categories: [Category.NATURE],
  },
  {
    native: 'вес',
    gender: Gender.MASCULINE,
    categories: [Category.UNITS_OF_MEASUREMENT],
  },
  {
    native: 'арест',
    stressIndex: 2,
    gender: Gender.MASCULINE,
    categories: [Category.JUSTICE],
    fixedDecoys: ['артист'],
  },
  {
    native: 'привет',
    stressIndex: 4,
    gender: Gender.MASCULINE,
    categories: [Category.GREETINGS],
  },
  {
    native: 'где',
    gender: Gender.MASCULINE,
    categories: [Category.QUESTION_WORD],
  },
  {
    native: 'туалет',
    stressIndex: 4,
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'музей',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'буфет',
    stressIndex: 3,
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.FOOD],
  },
  {
    native: 'ем',
    tense: Tense.PRESENT,
    personalPronoun: PersonalPronoun.FIRST_PERSON_SINGULAR,
    categories: [Category.FOOD],
  },
  {
    native: 'ест',
    tense: Tense.PRESENT,
    personalPronoun: PersonalPronoun.THIRD_PERSON_SINGULAR,
    categories: [Category.FOOD],
  },
  {
    native: 'ел',
    tense: Tense.PAST,
    personalPronoun: PersonalPronoun.THIRD_PERSON_SINGULAR,
    gender: [Gender.MASCULINE],
    categories: [Category.FOOD],
  },
  {
    native: 'ЕС',
    gender: Gender.MASCULINE,
    categories: [Category.GEOGRAPHICAL_NAMES, Category.POLITICS, Category.ACRONYMS],
  },
  {
    native: 'мне',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_PRONOUN],
  },
  WORD_SIX,
  {
    native: 'шест',
    gender: Gender.MASCULINE,
  },
  {
    native: 'есть',
    categories: [Category.EXISTENCE],
  },
  {
    native: 'ель',
    gender: Gender.FEMININE,
    categories: [Category.NATURE, Category.PLANTS],
  },
  {
    native: 'соль',
    gender: Gender.FEMININE,
    categories: [Category.FOOD, Category.SPICES],
  },
  WORD_SEVEN,
  {
    native: 'здесь',
    categories: [Category.DECLARATIVE_WORD],
  },
  {
    native: 'день',
    gender: Gender.MASCULINE,
    categories: [Category.TIME],
    fixedDecoys: ['Дон'],
  },
  {
    native: 'царь',
    gender: Gender.MASCULINE,
    categories: [Category.POLITICS, Category.GOVERNMENT_OFFICIAL],
  },
  {
    native: 'шаль',
    gender: Gender.FEMININE,
    categories: [Category.CLOTHES],
  },
  {
    native: 'Сибирь',
    stressIndex: 3,
    categories: [Category.GEOGRAPHICAL_NAMES],
  },
];
