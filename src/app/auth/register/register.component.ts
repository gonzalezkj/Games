import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    usuario = {
    email: '',
    password: '',
  }

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  registrarse(){
    console.log(this.usuario)
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res =>{
      console.log('register goes well: ', res);
      this.router.navigate(['home']);
    })
  }


}