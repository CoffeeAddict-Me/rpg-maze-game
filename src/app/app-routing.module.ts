import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { MainComponent } from './components/main/main.component';
import { IntroComponent } from './components/intro/intro.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'character-select', component: CharacterSelectComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'main', component: MainComponent},
  { path: '**', redirectTo: 'welcome' }
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
