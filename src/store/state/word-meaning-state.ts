import { GameState } from 'src/types/game-state';
import { Word } from 'src/types/word';

export interface WordMeaningState {
  state: GameState;
  scrambledWords?: Word[];
  wordIndex: number;
  decoyMeanings?: string[];
  streak: number;
}

export const WORD_MEANING_INITIAL_STATE: WordMeaningState = {
  state: GameState.INITIAL,
  wordIndex: 0,
  streak: 0,
};
