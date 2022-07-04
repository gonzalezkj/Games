import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './vista/aboutme/aboutme.component';
import { AdivinaComponent } from './vista/adivina/adivina.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { GamesComponent } from './vista/games/games.component';
import { HomeComponent } from './vista/home/home.component';
import { StatsComponent } from './vista/stats/stats.component';
import { TatetiComponent } from './vista/tateti/tateti.component';
import { PiedrapapelComponent } from './vista/piedrapapel/piedrapapel.component';
import { PremiumComponent } from './vista/premium/premium.component';
import { NewgameComponent } from './vista/newgame/newgame.component';
import { VigilantepremiumGuard } from './vigilantepremium.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagenotfoundComponent } from './vista/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'games', component:GamesComponent },
  { path: 'aboutme', component:AboutmeComponent },
  { path: 'ahorcado', component:AhorcadoComponent },
  { path: 'adivina', component:AdivinaComponent},
  { path: 'tateti', component:TatetiComponent},
  { path: 'piedrapapel', component:PiedrapapelComponent},
  { path: 'stats', component:StatsComponent},
  { path: 'premium', component:PremiumComponent},
  { path: 'newgame', component:NewgameComponent},
    //canActivate: [VigilantepremiumGuard]},
  { path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
