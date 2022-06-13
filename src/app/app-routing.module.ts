import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './vista/aboutme/aboutme.component';
import { AdivinaComponent } from './vista/adivina/adivina.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { GamesComponent } from './vista/games/games.component';
import { HomeComponent } from './vista/home/home.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/registro/registro.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'games', component:GamesComponent },
  { path: 'aboutme', component:AboutmeComponent },
  { path: 'ahorcado', component:AhorcadoComponent },
  { path: 'adivina', component:AdivinaComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
