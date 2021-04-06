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
  NATURE,
  BODY_PARTS,
  BOOLEAN,
  BUILDINGS,
  CITIES,
  CUTLERY,
  COLORS,
  COMMUNICATION,
  COMPARATIVE_WORD,
  CONCEPTS,
  CONJUNCTIVE_WORD,
  DAILY_ROUTINE,
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
  GREETINGS,
  HEALTH,
  INFORMAL,
  JUSTICE,
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
  PLURAL,
  PROFESSION,
  RELATIONS,
  RIVERS,
  QUESTION_WORD,
  SPORTS,
  STUDYING,
  SWEETS,
  TIME,
  TRANSPORTATION,
  UNITS_OF_MEASUREMENT,
  WEATHER,
  WRITING,
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
