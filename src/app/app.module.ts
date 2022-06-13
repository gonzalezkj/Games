import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vista/home/home.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/registro/registro.component';
import { EncabezadoComponent } from './vista/encabezado/encabezado.component';
import { FooterComponent } from './vista/footer/footer.component';
import { GamesComponent } from './vista/games/games.component';
import { AboutmeComponent } from './vista/aboutme/aboutme.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { AdivinaComponent } from './vista/adivina/adivina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    EncabezadoComponent,
    FooterComponent,
    GamesComponent,
    AboutmeComponent,
    AhorcadoComponent,
    AdivinaComponent,
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
