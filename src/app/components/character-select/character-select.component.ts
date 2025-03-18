import { Component } from '@angular/core';
import { Unit } from '../../model/unit.model';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrl: './character-select.component.scss'
})
export class CharacterSelectComponent {
  playerName: string = '';  // Player's custom name
  playerGender: string = 'Male';  // Default gender
  selectedClass: Unit | '' = '';  // Store selected class
  units: Unit[] = [
    {
      name: 'Warrior',
      type: 'Warrior',
      life: 20,
      dexterity: 5,
      strength: 15,
      gender: '',
      maleImage: '/assets/male-warrior.jpg',
      femaleImage: '/assets/female-warrior.jpg'
    },
    {
      name: 'Rogue',
      type: 'Rogue',
      life: 12,
      dexterity: 15,
      strength: 7,
      gender: '',
      maleImage: "/assets/male-rouge.jpg",
      femaleImage: '/assets/female-rouge.jpg'
    },
    {
      name: 'Mage',
      type: 'Mage',
      life: 10,
      dexterity: 12,
      strength: 5,
      gender: '',
      maleImage: '/assets/male-mage.jpg',
      femaleImage: '/assets/female-mage.jpg'
    }
  ];

  constructor(private gameService: GameService, private router: Router) { }

  // When a class is selected, update selectedClass and show name input
  selectClass(unit: Unit) {
    this.selectedClass = unit;
  }

  // When gender is updated, change the images accordingly
  updateGender() {
    if (this.selectedClass !== '') {
      // Update gender based on selected playerGender
      this.selectedClass.gender = this.playerGender;
    }
  }


  createCharacter() {
    if (this.playerName && this.selectedClass) {
      const playerUnit: Unit = {
        ...this.selectedClass,    // Spread the selected class data
        name: this.playerName,    // Assign custom player name
        gender: this.playerGender // Set the player's gender
      };

      this.gameService.setPlayer(playerUnit);
      this.router.navigate(['/maze']);
    } else {
      alert('Please select a class and enter your name.');
    }
  }
}
