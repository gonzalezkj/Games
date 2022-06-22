import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  _url = 'https://avatars.githubusercontent.com/gonzalezkj'

  constructor(private http:HttpClient) { }

  getAvatar(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
  }

}
