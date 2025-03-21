import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss'
})
export class DiceComponent {
  currentRoll: number = 1;

  @Output() rolled = new EventEmitter<number>(); // Emit a number

  rollDice() {
    this.currentRoll = Math.floor(Math.random() * 6) + 1;
    this.rolled.emit(this.currentRoll); // Emit the dice value
  }
}
