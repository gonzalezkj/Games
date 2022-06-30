import { Component, OnInit } from '@angular/core';
import { Adivina } from 'src/app/Entidades/adivina';


@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
  play:boolean;
  victorias:number;
  perdidas:number;
  myjuego:Adivina;

  constructor() { 
    this.myjuego=new Adivina();
    this.play=false;
    this.victorias=0;
    this.perdidas=0;
  }

  ngOnInit(): void {
  }

  iniciar(){
    this.play=true;
    this.myjuego.val_aleatorio();
    this.myjuego.trys=0;
  }
  ganarPerder(){
    if(this.myjuego.victoria_derrota()==true){
    this.play=false;
    this.victorias++;
    } else if(this.myjuego.victoria_derrota()==false){
      this.play=false
      this.perdidas++;
    } else {
      this.play=true
      this.myjuego.trys++;
    }
  }
}