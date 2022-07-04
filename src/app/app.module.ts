import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vista/home/home.component';
import { EncabezadoComponent } from './vista/encabezado/encabezado.component';
import { FooterComponent } from './vista/footer/footer.component';
import { GamesComponent } from './vista/games/games.component';
import { AboutmeComponent } from './vista/aboutme/aboutme.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { AdivinaComponent } from './vista/adivina/adivina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './vista/stats/stats.component';
import { TatetiComponent } from './vista/tateti/tateti.component';
import { AboutmeServices } from './vista/aboutme/aboutme.service';
import { HttpClientModule } from '@angular/common/http';
import { PiedrapapelComponent } from './vista/piedrapapel/piedrapapel.component';
import { PremiumComponent } from './vista/premium/premium.component';
import { NewgameComponent } from './vista/newgame/newgame.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './auth/register/register.component';
import { PagenotfoundComponent } from './vista/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    FooterComponent,
    GamesComponent,
    AboutmeComponent,
    AhorcadoComponent,
    AdivinaComponent,
    StatsComponent,
    TatetiComponent,
    PiedrapapelComponent,
    PremiumComponent,
    NewgameComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  exports: [
    AdivinaComponent, // ??????????????!!!!!!!!!!!!!
  ],
  providers: [
    AboutmeServices,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
