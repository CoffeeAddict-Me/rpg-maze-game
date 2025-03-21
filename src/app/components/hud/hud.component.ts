import { Component, OnInit } from '@angular/core';
import { Unit } from '../../model/unit.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.scss'
})
export class HudComponent implements OnInit {
  player: Unit | null | undefined;
  inventory: string[] = ['Potion', 'Key', 'Scroll'];
  log: string[] = ['Welcome to the Maze!', 'You found a potion!'];



  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.player = this.gameService.getPlayer();
  }
  
  onDiceRolled(result: number) {
    this.log.push(`You rolled a ${result}`);
  }
}
