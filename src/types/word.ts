import { Category } from 'src/types/category';
import { Gender } from 'src/types/gender';
import { PersonalPronoun } from 'src/types/personal-pronoun';
import { Tense } from 'src/types/tense';

interface WordCommon {
  /**
   * The word spelled out using russian characters, used as a key for translations
   */
  native: string;
  /**
   * 0-based index of the stressed character, optional for
   * single-syllable words or words containing ё (jo)
   */
  stressIndex?: number;
  /**
   * Semantic categories the word fits under, may be used for filtering in the future
   */
  categories: Category[];
  /**
   * `true` indicates swear words, optional since `false` is assumed by default
   */
  nonNormative?: boolean;
}

interface Noun extends WordCommon {
  gender?: Gender;
}

interface Verb extends WordCommon {
  /**
   * A single verb may belong to multiple genders, if missing assume it's the same for all genders
   */
  gender?: Gender[];
  tense: Tense;
  personalPronoun: PersonalPronoun;
}

export type Word = Noun | Verb;
