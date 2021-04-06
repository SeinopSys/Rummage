export const CANONICAL_URL = 'https://rummage.seinopsys.dev';

export type AvailableLanguage = 'hu' | 'en';

type LanguagesConfig = Record<
  AvailableLanguage,
  {
    nativeName: string;
  }
>;

export const LANGUAGES: LanguagesConfig = {
  en: {
    nativeName: 'English',
  },
  hu: {
    nativeName: 'Magyar',
  },
};

export const SITE_TITLE = 'Rummage';
