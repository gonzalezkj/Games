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
  localvictorias: Storage;
  localderrotas: Storage;
  a:string | null;
  b:number;
  lst: Storage;

  constructor() { 
    this.myjuego=new Adivina();
    this.play=false;
    this.victorias=0;
    this.perdidas=0;
    this.localvictorias = localStorage;
    this.localderrotas = localStorage;
    this.a = '';
    this.b = 0;
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
    this.localvictorias.setItem('victorias', String(this.victorias));
    console.log(this.localvictorias)
    } else if(this.myjuego.victoria_derrota()==false){
      this.play=false;
      this.perdidas++;
      this.localderrotas.setItem('derrotas', String(this.perdidas));
    } else {
      this.play=true
      this.myjuego.trys++;
    }
    this.a = localStorage.getItem('victorias');
    this.b = this.b + parseInt(this.a!)
  }

}