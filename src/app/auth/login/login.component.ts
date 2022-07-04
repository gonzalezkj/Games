import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: '',
  }

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.usuario)
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res =>{
      console.log('login goes well: ', res);
      this.router.navigate(['home']);
    })
  }

  logout(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
      this.router.navigate(['login']);
    })
  }



}
