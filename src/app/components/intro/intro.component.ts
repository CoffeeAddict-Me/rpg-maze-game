import { Component, OnInit } from '@angular/core';
import { Unit } from '../../model/unit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  player: Unit | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    const stored = sessionStorage.getItem('player');
    if (stored) {
      this.player = JSON.parse(stored);
    } else {
      this.router.navigate(['/character-select']);
    }
  }

  continue() {
    this.router.navigate(['/main']);
  }
}
