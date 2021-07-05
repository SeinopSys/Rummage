import { WORD_TWO } from 'src/config/words/numbers-1-to-10';
import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { Word } from 'src/types/word';

export const lesson00Part01Words: Word[] = [
  {
    native: 'дом',
    gender: Gender.MASCULINE,
    categories: [Category.BUILDINGS],
  },
  {
    native: 'торт',
    gender: Gender.MASCULINE,
    categories: [Category.FOOD, Category.SWEETS],
  },
  {
    native: 'порт',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'сын',
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'ром',
    gender: Gender.MASCULINE,
    categories: [Category.BEVERAGES],
  },
  {
    native: 'гол',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS, Category.SPORTS],
    fixedDecoys: ['голубь'],
  },
  {
    native: 'банк',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.FINANCIAL],
  },
  {
    native: 'парк',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'бал',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS, Category.SPORTS],
  },
  {
    native: 'бар',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS],
  },
  {
    native: 'суп',
    gender: Gender.MASCULINE,
    categories: [Category.FOOD],
  },
  {
    native: 'бокс',
    gender: Gender.MASCULINE,
    categories: [Category.SPORTS],
  },
  {
    native: 'Марс',
    gender: Gender.MASCULINE,
    categories: [Category.GEOGRAPHICAL_NAMES, Category.OUTER_SPACE],
  },
  {
    native: 'сок',
    gender: Gender.MASCULINE,
    categories: [Category.BEVERAGES],
  },
  {
    native: 'стол',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS, Category.FURNITURE],
    fixedDecoys: ['стул'],
  },
  {
    native: 'стул',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS, Category.FURNITURE],
    fixedDecoys: ['стол'],
  },
  {
    native: 'брат',
    gender: Gender.MASCULINE,
    categories: [Category.FAMILY],
  },
  {
    native: 'Омск',
    gender: Gender.MASCULINE,
    categories: [Category.GEOGRAPHICAL_NAMES, Category.CITIES],
  },
  {
    native: 'Томск',
    gender: Gender.MASCULINE,
    categories: [Category.GEOGRAPHICAL_NAMES, Category.CITIES],
  },
  {
    native: 'Дон',
    gender: Gender.MASCULINE,
    categories: [Category.GEOGRAPHICAL_NAMES, Category.RIVERS],
    fixedDecoys: ['дом'],
  },
  {
    native: 'он',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_PRONOUN],
    fixedDecoys: ['она', 'оно'],
  },
  {
    native: 'она',
    gender: Gender.FEMININE,
    stressIndex: 2,
    categories: [Category.PERSONAL_PRONOUN],
    fixedDecoys: ['он', 'оно'],
  },
  {
    native: 'оно',
    gender: Gender.NEUTER,
    stressIndex: 2,
    categories: [Category.PERSONAL_PRONOUN],
    fixedDecoys: ['он', 'она'],
  },
  WORD_TWO,
  {
    native: 'мак',
    gender: Gender.MASCULINE,
    categories: [Category.FOOD, Category.PLANTS],
  },
  {
    native: 'рак',
    gender: Gender.MASCULINE,
    categories: [Category.ANIMALS],
  },
  {
    native: 'фронт',
    gender: Gender.MASCULINE,
    categories: [Category.WEATHER],
  },
  {
    native: 'глобус',
    gender: Gender.MASCULINE,
    categories: [Category.OUTER_SPACE],
    fixedDecoys: ['голубь'],
  },
  {
    native: 'вот',
    gender: Gender.MASCULINE,
    categories: [Category.DECLARATIVE_WORD],
  },
  {
    native: 'волк',
    gender: Gender.MASCULINE,
    categories: [Category.ANIMALS],
  },
  {
    native: 'зонт',
    gender: Gender.MASCULINE,
    categories: [Category.OBJECTS],
  },
  {
    native: 'нос',
    gender: Gender.MASCULINE,
    categories: [Category.BODY_PARTS],
    fixedDecoys: ['нож'],
  },
  {
    native: 'мост',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.BUILDINGS],
    fixedDecoys: ['сейчас'],
  },
  {
    native: 'шарф',
    gender: Gender.MASCULINE,
    categories: [Category.CLOTHES],
  },
  {
    native: 'там',
    gender: Gender.MASCULINE,
    categories: [Category.DECLARATIVE_WORD, Category.QUESTION_WORD],
  },
  {
    native: 'мы',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_PRONOUN],
  },
  {
    native: 'ты',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_PRONOUN, Category.INFORMAL],
  },
  {
    native: 'вы',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_PRONOUN, Category.FORMAL],
  },
  {
    native: 'бы',
    gender: Gender.MASCULINE,
    categories: [Category.EXISTENCE],
  },
  {
    native: 'да',
    gender: Gender.FEMININE,
    categories: [Category.BOOLEAN, Category.POSITIVE_WORD],
  },
  {
    native: 'Марк',
    gender: Gender.MASCULINE,
    categories: [Category.PERSONAL_NAMES],
  },
  {
    native: 'был',
    gender: Gender.MASCULINE,
    categories: [Category.EXISTENCE],
  },
  {
    native: 'кто',
    gender: Gender.NEUTER,
    categories: [Category.QUESTION_WORD],
  },
  {
    native: 'ха-ха',
    stressIndex: 4,
    gender: Gender.FEMININE,
    categories: [Category.ONOMATOPOEIC_WORD],
  },
  {
    native: 'СМС',
    gender: Gender.MASCULINE,
    categories: [Category.ACRONYMS, Category.COMMUNICATION],
  },
  {
    native: 'СССР',
    gender: Gender.MASCULINE,
    categories: [Category.ACRONYMS, Category.POLITICS],
  },
  {
    native: 'сыр',
    gender: Gender.MASCULINE,
    categories: [Category.FOOD, Category.DAIRY_PRODUCTS],
  },
  {
    native: 'МГУ',
    gender: Gender.MASCULINE,
    categories: [Category.ACRONYMS, Category.GEOGRAPHICAL_NAMES],
  },
  {
    native: 'мэр',
    gender: Gender.MASCULINE,
    categories: [Category.GOVERNMENT_OFFICIAL],
  },
  {
    native: 'хор',
    gender: Gender.MASCULINE,
    categories: [Category.PROFESSION],
  },
  {
    native: 'хром',
    gender: Gender.MASCULINE,
    categories: [Category.MATERIALS, Category.METALS],
  },
  {
    native: 'храм',
    gender: Gender.MASCULINE,
    categories: [Category.LOCATIONS, Category.BUILDINGS],
  },
  {
    native: 'как',
    gender: Gender.MASCULINE,
    categories: [Category.COMPARATIVE_WORD],
  },
];
