import { extraWords } from 'src/config/words/extra-words';
import { lesson00Part01Words } from 'src/config/words/lesson-00-part-01-words';
import { lesson00Part02Words } from 'src/config/words/lesson-00-part-02-words';
import { lesson00Part03Words } from 'src/config/words/lesson-00-part-03-words';
import { lesson01Block01Words } from 'src/config/words/lesson-01-block-01-words';
import { lesson01Block02Words } from 'src/config/words/lesson-01-block-02-words';

export const lesson00WordsArray = [...lesson00Part01Words, ...lesson00Part02Words, ...lesson00Part03Words];
export const lesson01WordsArray = [...lesson01Block01Words, ...lesson01Block02Words];
export const allWordsArray = [...lesson00WordsArray, ...lesson01WordsArray, ...extraWords];
