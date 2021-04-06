import { combineReducers } from '@reduxjs/toolkit';
import gameReducer, { GameState } from 'src/store/slices/gameSlice';

export interface RootState {
  game: GameState;
}

export const rootReducer = combineReducers<RootState>({
  game: gameReducer,
});
