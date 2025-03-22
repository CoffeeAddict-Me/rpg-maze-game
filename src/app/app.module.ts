import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { MazeComponent } from './components/maze/maze.component';
import { DiceComponent } from './components/dice/dice.component';
import { HudComponent } from './components/hud/hud.component';
import { WinnerComponent } from './components/winner/winner.component';
import { YouDiedComponent } from './components/you-died/you-died.component';
import { LootComponent } from './components/loot/loot.component';
import { YourBagComponent } from './components/your-bag/your-bag.component';
import { MainComponent } from './components/main/main.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSelectComponent,
    MazeComponent,
    DiceComponent,
    HudComponent,
    WinnerComponent,
    YouDiedComponent,
    LootComponent,
    YourBagComponent,
    MainComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
