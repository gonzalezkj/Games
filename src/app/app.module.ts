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
import { SignInComponent } from './vista/sign-in/sign-in.component';
import { ProfileComponent } from './vista/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    EncabezadoComponent,
    FooterComponent,
    GamesComponent,
    AboutmeComponent,
    AhorcadoComponent,
    AdivinaComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
