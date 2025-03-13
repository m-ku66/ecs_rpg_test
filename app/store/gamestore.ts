import { create } from "zustand";
import { ECS } from "../lib/ecs/ecs";
import { MagiaRegenerationSystem } from "../lib/ecs/systems";

// Define the shape of our game state
interface GameState {
  // Core game engine
  ecs: ECS;

  // Game state tracking
  gameStatus: "lobby" | "selecting" | "executing" | "drawing" | "gameOver";
  currentTurn: number;

  // Keep track of important entity IDs for easy reference
  playerEntityId: string | null;
  opponentEntityId: string | null;
  playerMageId: string | null;
  opponentMageId: string | null;

  // Game actions
  initGame: () => void;
  selectSpell: (playerId: string, spellId: string) => void;
  executeTurn: () => void;
  endTurn: () => void;
}

// Create the store
export const useGameStore = create<GameState>((set, get) => ({
  // Initial state
  ecs: new ECS(),
  gameStatus: "lobby",
  currentTurn: 0,
  playerEntityId: null,
  opponentEntityId: null,
  playerMageId: null,
  opponentMageId: null,

  // Game actions will go here
  initGame: () => {
    // We'll implement this next
  },

  selectSpell: (playerId, spellId) => {
    // We'll implement this later
  },

  executeTurn: () => {
    // We'll implement this later
  },

  endTurn: () => {
    const { currentTurn } = get();
    set({ currentTurn: currentTurn + 1 });
  },
}));


