import { Component } from "./types";

// Mage component - contains all mage-specific attributes
export interface MageComponent extends Component {
  type: "mage"; // Type identifier
  health: number; // Current health
  maxHealth: number; // Maximum health
  magia: number; // Current magical energy
  maxMagia: number; // Maximum magical energy
  magiaRegenRate: number; // How much magia regenerates per turn
  agility: number; // Determines spell casting order
}


