import 'react-i18next';
import commonEnNs from 'public/locales/en/common.json';
import commonHuNs from 'public/locales/hu/common.json';
import gameEnNs from 'public/locales/en/game.json';
import gameHuNs from 'public/locales/hu/game.json';
import wordsEnNs from 'public/locales/en/words.json';
import wordsHuNs from 'public/locales/hu/words.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof commonEnNs & typeof commonHuNs;
      game: typeof gameEnNs & typeof gameHuNs;
      words: typeof wordsEnNs & typeof wordsHuNs;
    };
  }

  export type AppI18nNamespaces = keyof CustomTypeOptions['resources'] & string;
}
