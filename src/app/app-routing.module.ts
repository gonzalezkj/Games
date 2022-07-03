import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './vista/profile/profile.component';
import { SignInComponent } from './vista/sign-in/sign-in.component';
import { AboutmeComponent } from './vista/aboutme/aboutme.component';
import { AdivinaComponent } from './vista/adivina/adivina.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { GamesComponent } from './vista/games/games.component';
import { HomeComponent } from './vista/home/home.component';
import { StatsComponent } from './vista/stats/stats.component';
import { TatetiComponent } from './vista/tateti/tateti.component';
import { PiedrapapelComponent } from './vista/piedrapapel/piedrapapel.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'games', component:GamesComponent },
  { path: 'aboutme', component:AboutmeComponent },
  { path: 'ahorcado', component:AhorcadoComponent },
  { path: 'adivina', component:AdivinaComponent},
  { path: 'tateti', component:TatetiComponent},
  { path: 'piedrapapel', component:PiedrapapelComponent},
  { path: 'stats', component:StatsComponent},
  { path: '**', redirectTo: 'signIn'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
