import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:string = ''
  public pass:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    localStorage.setItem(this.usuario, this.pass)
  }

}
