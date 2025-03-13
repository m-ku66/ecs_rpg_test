import { Component } from "./types";

// Player component - contains all player-specific attributes
export interface PlayerComponent extends Component {
  type: "player"; // Type identifier
  userName: string; // Player's username
  isAi: boolean; // Is this player controlled by the AI?
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
  // Add more mage attributes here
}

export interface SpellComponent extends Component {
  type: "spell"; // Type identifier
  name: string; // Spell name
  description: string; // Spell description
  magiaCost: number; // Mana cost of the spell
  castingTime: number; // Time it takes to cast the spell
  basePower: number; // Base power of the spell
  // Add more spell attributes here
}
