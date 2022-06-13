import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:string = ''
  public pass:string = ''

  constructor(public Ruteo:Router) { }

  ngOnInit(): void {
  }

  loguear(){
    if (!localStorage.getItem(this.usuario)) {
      //return "usuario incorrecto"
    } else {
      if (localStorage.getItem(this.usuario) == this.pass){
        this.Ruteo.navigateByUrl('')
      }
    }
  }
  
}
