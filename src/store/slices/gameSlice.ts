import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reject, sample, sampleSize } from 'lodash';
import { allWordsArray } from 'src/config/words';
import { ValuesOf } from 'src/types/common';
import { Word } from 'src/types/word';

export interface GameState {
  word?: Word;
  decoyMeanings?: string[];
  streak: number;
}

const INITIAL_STATE: GameState = {
  streak: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_STATE,
  reducers: {
    selectWord(state: GameState) {
      const newWord = sample(reject(allWordsArray, (el) => el.key === state.word?.key)) as Word;
      state.word = newWord;
      state.decoyMeanings = sampleSize(
        reject(allWordsArray, (el) => el.key === newWord.key),
        3,
      ).map((el) => el.key);
    },
    setStreak(state: GameState, action: PayloadAction<number>) {
      state.streak = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export type GameActions = ValuesOf<typeof gameSlice>;

export default gameSlice.reducer;
