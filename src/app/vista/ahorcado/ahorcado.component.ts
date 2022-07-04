import { Component, OnInit } from '@angular/core';
import { Ahorcado } from 'src/app/Entidades/ahorcado';
import { AlertasService } from 'src/app/alertas/alertas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})

export class AhorcadoComponent implements OnInit {

  public espacios: Array<string>;
  public letra: string = '';
  public miAhorcado:Ahorcado;
  public errores:number = 0;
  public imagenes: Array<string>;
  public prueba:boolean;
  public resuelto:string = '';
  public victorias:number = 0;
  public derrotas:number = 0;
  public localvictorias: Storage;
  public localderrotas: Storage;
  
  constructor(private router:Router,private alert:AlertasService) {
    this.prueba = false;
    this.miAhorcado = new Ahorcado();
    this.miAhorcado.palabra = 'Angular';
    this.espacios = this.miAhorcado.palabra.split('');
    this.imagenes = ['assets/imagenes/ahorcado0.png', 'assets/imagenes/ahorcado1.jpg', 'assets/imagenes/ahorcado2.jpg', 'assets/imagenes/ahorcado3.jpg', 'assets/imagenes/ahorcado4.jpg','assets/imagenes/ahorcado5.jpg', 'assets/imagenes/ahorcado6.jpg', 'assets/imagenes/ahorcado7.jpg']
    this.localvictorias = localStorage;
    this.localderrotas = localStorage;
  }

  ngOnInit(): void {
  }

  validar() {
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.miAhorcado.letrasElegidas += (this.letra + ',')
      this.prueba = !this.miAhorcado.palabra.includes(this.letra)
        if (this.prueba == true){
          this.errores ++;
        } else {
          this.resuelto += this.letra;
        }
      this.letra='';
    }
    if (this.resuelto.length == (this.miAhorcado.palabra.length)-1 && (this.errores<7)){
      this.alert.showSuccess('WIN!', 'You got all the letters right')
      this.victorias ++;
      this.localvictorias.setItem('victoriaahorcado', String(this.victorias));
      this.router.navigate(['home'])
    } else if (this.errores>=7){
      this.alert.showError('LOSE!', "You couldn't guess all the letters ")
      this.derrotas ++;
      this.localderrotas.setItem('derrotaahorcado', String(this.victorias));
      this.router.navigate(['home'])
    }
  }

  
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

}