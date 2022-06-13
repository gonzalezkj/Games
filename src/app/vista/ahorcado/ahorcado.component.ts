import { Component, OnInit } from '@angular/core';
import { Ahorcado } from 'src/app/Entidades/ahorcado';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  public espacios: Array<string>;
  public letra: string = '';
  public miAhorcado:Ahorcado;

  constructor() {
    this.miAhorcado = new Ahorcado();
    this.miAhorcado.palabra = 'Angular';
    this.espacios = this.miAhorcado.palabra.split('');
  }

  ngOnInit(): void {

  }

  validar() {
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.miAhorcado.letrasElegidas += (this.letra + ',')
      this.letra='';
    }
  }
  
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  
  }
  

}