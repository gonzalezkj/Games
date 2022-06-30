import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AboutmeServices{

    api_github: string = 'https://api.github.com/users/gonzalezkj';

    constructor(public http:HttpClient){}

    public getUsuario(): Observable<any> 
    {
        return this.http.get(this.api_github);
    }

    public getRepos(): Observable<any> 
    {
        return this.http.get(this.api_github + '/repos');
    }

}