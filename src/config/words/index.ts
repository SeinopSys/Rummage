import { extraWords } from 'src/config/words/extra-words';
import { lesson00Part01Words } from 'src/config/words/lesson-00-part-01-words';
import { lesson00Part02Words } from 'src/config/words/lesson-00-part-02-words';
import { lesson00Part03Words } from 'src/config/words/lesson-00-part-03-words';
import { lesson00Part04Words } from 'src/config/words/lesson-00-part-04-words';
import { lesson00Part05Words } from 'src/config/words/lesson-00-part-05-words';
import { lesson00Part06Words } from 'src/config/words/lesson-00-part-06-words';
import { lesson01Block01Words } from 'src/config/words/lesson-01-block-01-words';
import { lesson01Block02Words } from 'src/config/words/lesson-01-block-02-words';
import { numbers11To20 } from 'src/config/words/numbers-11-to-20';
import { numbers200To1000 } from 'src/config/words/numbers-200-to-1000';
import { numbers30To100 } from 'src/config/words/numbers-30-to-100';

export const lesson00WordsArray = [
  ...lesson00Part01Words,
  ...lesson00Part02Words,
  ...lesson00Part03Words,
  ...lesson00Part04Words,
  ...lesson00Part05Words,
  ...lesson00Part06Words,
];
export const lesson01WordsArray = [...lesson01Block01Words, ...lesson01Block02Words];
export const allWordsArray = [
  ...lesson00WordsArray,
  ...lesson01WordsArray,
  ...extraWords,
  ...numbers11To20,
  ...numbers30To100,
  ...numbers200To1000,
];
