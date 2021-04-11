import { combineReducers } from '@reduxjs/toolkit';
import { wordMeaningReducer } from 'src/store/slices/word-meaning-slice';
import { WordMeaningState } from 'src/store/state/word-meaning-state';

export interface RootState {
  wordMeaning: WordMeaningState;
}

export const rootReducer = combineReducers<RootState>({
  wordMeaning: wordMeaningReducer,
});
