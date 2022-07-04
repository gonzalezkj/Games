import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/alertas/alertas.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  public equipo: number = 0;
  public equipoazul: number = 0;
  public equiporojo: number = 0;
  public cuadro: any;
  public victorias:number = 0;
  public derrotas:number = 0;
  public rojo1: number = 0;
  public rojo2: number = 0;
  public rojo3: number = 0;
  public rojo4: number = 0;
  public rojo5: number = 0;
  public rojo6: number = 0;
  public rojo7: number = 0;
  public rojo8: number = 0;
  public rojo9: number = 0;
  public blue1: number = 0;
  public blue2: number = 0;
  public blue3: number = 0;
  public blue4: number = 0;
  public blue5: number = 0;
  public blue6: number = 0;
  public blue7: number = 0;
  public blue8: number = 0;
  public blue9: number = 0;
  public localvictorias: Storage;
  public localderrotas: Storage;

  constructor(private router:Router, private alert:AlertasService) { 
    this.victorias = 0;
    this.derrotas = 0;
    this.localvictorias = localStorage;
    this.localderrotas = localStorage;
  }

  ngOnInit(): void {
  }

  WinLost(){
    if ((this.rojo1 == 1) && (this.rojo2 == 1) && (this.rojo3 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo1 == 1) && (this.rojo4 == 1) && (this.rojo7 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo1 == 1) && (this.rojo5 == 1) && (this.rojo9 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo3 == 1) && (this.rojo6 == 1) && (this.rojo9 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo9 == 1) && (this.rojo8 == 1) && (this.rojo7 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo3 == 1) && (this.rojo5 == 1) && (this.rojo7 == 1) && (this.equiporojo >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.rojo2 == 1) && (this.rojo5 == 1) && (this.rojo8 == 1) && (this.equiporojo >= 3)){
        console.log(this.equiporojo)
        this.alert.showSuccess('WIN!', 'You got three in line')
        this.victorias ++;
        this.localvictorias.setItem('victoriatateti', String(this.victorias));
        this.router.navigate(['home'])
    } else if ((this.rojo4 == 1) && (this.rojo5 == 1) && (this.rojo6 == 1) && (this.equiporojo >= 3)){
        console.log(this.equiporojo)
        this.alert.showSuccess('WIN!', 'You got three in line')
        this.victorias ++;
        this.localvictorias.setItem('victoriatateti', String(this.victorias));
        this.router.navigate(['home'])


    } else if ((this.blue1 == 1) && (this.blue2 == 1) && (this.blue3 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue1 == 1) && (this.blue4 == 1) && (this.blue7 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue1 == 1) && (this.blue5 == 1) && (this.blue9 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue1 == 3) && (this.blue6 == 1) && (this.blue9 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue9 == 1) && (this.blue8 == 1) && (this.blue7 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue3 == 1) && (this.blue5 == 1) && (this.blue7 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue2 == 1) && (this.blue5 == 1) && (this.blue8 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
    } else if ((this.blue4 == 1) && (this.blue5 == 1) && (this.blue6 == 1) && (this.equipoazul >= 3)){
      console.log(this.equiporojo)
      this.alert.showSuccess('WIN!', 'You got three in line')
      this.victorias ++;
      this.localvictorias.setItem('victoriatateti', String(this.victorias));
      this.router.navigate(['home'])
  }
}

  Cuadro1() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadro");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue1 = 1;
    } else {
      var cuadro = document.getElementById("cuadro");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo1 = 1;
    }
  }

  Cuadro2() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadrotwo");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue2 = 1;
    } else {
      var cuadro = document.getElementById("cuadrotwo");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo2 = 1;
    }
  }
  Cuadro3() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadrothree");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue3 = 1;
    } else {
      var cuadro = document.getElementById("cuadrothree");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo3 = 1;
    }
  }

  Cuadro4() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadrofour");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue4 = 1;
    } else {
      var cuadro = document.getElementById("cuadrofour");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo4 = 1;
    }
  }

  Cuadro5() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadrofive");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue5 = 1;
    } else {
      var cuadro = document.getElementById("cuadrofive");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo5 = 1;
    }
  }

  Cuadro6() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadrosix");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue6 = 1;
    } else {
      var cuadro = document.getElementById("cuadrosix");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo6 = 1;
    }
  }

  Cuadro7() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadroseven");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue7 = 1;
    } else {
      var cuadro = document.getElementById("cuadroseven");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo7 = 1;
    }
  }

  Cuadro8() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadroeight");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue8 = 1;
    } else {
      var cuadro = document.getElementById("cuadroeight");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo8 = 1;
    }
  }

  Cuadro9() {
    if (this.equipo % 2 == 0) {
      var cuadro = document.getElementById("cuadronine");
      cuadro!.style.background = 'blue';
      this.equipo ++;
      this.equipoazul ++;
      this.blue9 = 1;
    } else {
      var cuadro = document.getElementById("cuadronine");
      cuadro!.style.background = 'red';
      this.equipo ++;
      this.equiporojo ++;
      this.rojo9 = 1;
    }
  }


}
