import { Component } from "./types";
import { Affinity, Personality, StatusEffects } from "../game_types/types";

// Player component - contains all player-specific attributes. The player is a sorcery tutor
export interface PlayerComponent extends Component {
  type: "player"; // Type identifier
  userName: string; // Player's username
  isAi: boolean; // Is this player controlled by the AI?
  students: MageComponent[]; // List of students the player has
  // Add more player attributes here
}

// Mage component - contains all mage-specific attributes
export interface MageComponent extends Component {
  type: "mage"; // Type identifier
  health: number; // Current health
  maxHealth: number; // Maximum health
  magia: number; // Current magical energy
  maxMagia: number; // Maximum magical energy
  magiaRegenRate: number; // How much magia regenerates per turn
  agility: number; // Determines spell casting order
  resistance: number; // Reduces incoming spell damage
  wisdom: number; // Increases crit chance and spell uses
  attackPower: number; // Base attack power
  affinity: Affinity; // Elemental affinity
  personality: Personality; // Personality trait
  innateSpell: SpellComponent; // Innate spell
  grimoire: SpellComponent[]; // List of spells the mage knows
  // Add more mage attributes here
}

export interface SpellComponent extends Component {
  type: "spell"; // Type identifier
  name: string; // Spell name
  description: string; // Spell description
  magiaCost: number; // Mana cost of the spell
  castingTime: number; // Time it takes to cast the spell
  basePower: number; // Base power of the spell
  uses: number; // Number of times the spell can be cast
  effects: StatusEffects[]; // List of effects the spell has
  affinity: Affinity; // Elemental affinity of the spell
  // Add more spell attributes here
}
