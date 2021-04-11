import { createSlice } from '@reduxjs/toolkit';
import { shuffle } from 'lodash';
import { allWordsArray } from 'src/config/words';
import { WORD_MEANING_INITIAL_STATE, WordMeaningState } from 'src/store/state/word-meaning-state';
import { ValuesOf } from 'src/types/common';
import { GameState } from 'src/types/game-state';
import { selectDecoyMeanings } from 'src/utils/select-decoy-meanings';

const wordMeaningSlice = createSlice({
  name: 'wordMeaning',
  initialState: WORD_MEANING_INITIAL_STATE,
  reducers: {
    startGame(state: WordMeaningState) {
      state.scrambledWords = shuffle(allWordsArray);
      state.wordIndex = WORD_MEANING_INITIAL_STATE.wordIndex;
      state.streak = WORD_MEANING_INITIAL_STATE.streak;
      state.decoyMeanings = selectDecoyMeanings(state);
      state.state = GameState.CHOICE;
    },
    advanceWord(state: WordMeaningState) {
      state.streak++;
      if (state.streak >= allWordsArray.length) {
        state.state = GameState.OVER;
        return;
      }

      state.wordIndex++;
      state.decoyMeanings = selectDecoyMeanings(state);
    },
    endGame(state: WordMeaningState) {
      state.state = GameState.OVER;
    },
  },
});

export const wordMeaningActions = wordMeaningSlice.actions;

export type WordMeaningActions = ValuesOf<typeof wordMeaningSlice>;

export const wordMeaningReducer = wordMeaningSlice.reducer;
