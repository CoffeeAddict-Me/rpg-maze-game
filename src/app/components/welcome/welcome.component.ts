import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(private router: Router) { }

  navigateToCharacterSelect() {
    console.log('====================================');
    console.log("button was pressed");
    console.log('====================================');
    this.router.navigate(['/character-select']);
  }
}
