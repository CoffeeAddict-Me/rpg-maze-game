import { Injectable } from '@angular/core';
import { Unit } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private player: Unit | null = null;

  constructor() { }

  // Set the player's character
  setPlayer(unit: Unit): void {
    sessionStorage.setItem('player', JSON.stringify(unit));  // Store player info in sessionStorage
    this.player = unit;
  }

  // Get the player's character
  getPlayer(): Unit | null {
    if (!this.player) {
      const playerData = sessionStorage.getItem('player');
      if (playerData) {
        this.player = JSON.parse(playerData);
      }
    }
    return this.player;
  }

  // Clear the player's character
  clearPlayer(): void {
    sessionStorage.removeItem('player');
    this.player = null;
  }
}
