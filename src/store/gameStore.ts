// src/store/gameStore.ts
import { create } from 'zustand';

export type GameState = 'IDLE' | 'WAITING' | 'READY' | 'EARLY_CLICK' | 'FINISHED';

export interface ReactionScore {
  playerName: string;
  date: string;
  reactionTimeMs: number;
}

interface GameStore {
  currentPlayer: string;
  gameState: GameState;
  scores: ReactionScore[];
  setCurrentPlayer: (name: string) => void;
  setGameState: (state: GameState) => void;
  addScore: (score: ReactionScore) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: '',
  gameState: 'IDLE',
  scores: [],
  setCurrentPlayer: (name) => set({ currentPlayer: name }),
  setGameState: (state) => set({ gameState: state }),
  addScore: (score) => set((state) => ({ scores: [...state.scores, score] })),
}));