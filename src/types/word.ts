export enum Gender {
  MASCULINE = '♂',
  FEMININE = '♀',
  NEUTER = '~',
}

export enum Category {
  ACRONYM,
  AIR_TRAVEL,
  ALCOHOLIC_DRINKS,
  ANIMALS,
  BEVERAGES,
  BODY_PARTS,
  BOOLEAN,
  BUILDINGS,
  CITIES,
  COLORS,
  COMPARATIVE_WORD,
  CONCEPTS,
  CONJUNCTIVE_WORD,
  DAIRY_PRODUCTS,
  DECLARATIVE_WORD,
  ENTERTAINMENT,
  EXISTENCE,
  FAMILY,
  FINANCIAL,
  FOOD,
  FORMAL,
  FRUITS,
  FURNITURE,
  GEOGRAPHICAL_NAMES,
  GOVERNMENT_OFFICIAL,
  INFORMAL,
  LOCATIONS,
  MATERIALS,
  METALS,
  MUSIC,
  NUMBERS,
  OBJECTS,
  ONOMATOPOEIC_WORD,
  OUTER_SPACE,
  PERSONAL_NAMES,
  PERSONAL_PRONOUN,
  PLANTS,
  PROFESSION,
  RELATIONS,
  RIVERS,
  QUESTION_WORD,
  SPORTS,
  SWEETS,
  TIME,
  UNITS_OF_MEASUREMENT,
  WEATHER,
}

export interface Word {
  /**
   * The word spelled out using russian characters
   */
  native: string;
  /**
   * 0-based index of the stressed character, optional for
   * single-syllable words or words containing ё (jo)
   */
  stressIndex?: number;
  /**
   * They key from locales/<lang>/words.json; used to display the meaning(s) for this word
   *
   * May resolve to an array of different meanings which is handled on the frontend
   */
  key: string;
  gender: Gender;
  categories: Category[];
  /**
   * `true` indicates swear words
   */
  nonNormative?: boolean;
}
