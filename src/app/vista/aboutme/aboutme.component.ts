import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutmeServices } from './aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  datos:string = '';
  name:string = '';
  avatar:string = '';
  bio:string = '';
  location: string = '';
  misRepos: Observable<any>|undefined;

  constructor(private git: AboutmeServices, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.git.getUsuario().subscribe(
      datos=>{
        console.info(datos);
        this.avatar = datos.avatar_url;
        this.name = datos.name;
        this.bio = datos.bio;
        this.location = datos.location;
      });

    this.misRepos = this.git.getRepos();
  }
  


}
