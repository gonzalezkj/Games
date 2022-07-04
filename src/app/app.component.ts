import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutmeServices } from './vista/aboutme/aboutme.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  session: any;
  aboutme: any;
  userLogged = this.authService.getUserLogged();
  
  constructor( private router: Router, public github:AboutmeServices, private authService: AuthService)
  {}


  public ngOnInit(): void {
    this.github.getUsuario().subscribe((r) => { this.aboutme = r; console.log(r)})
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}