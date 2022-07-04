import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilantepremiumGuard implements CanActivate {
  
  aber:string;
  bol:boolean;

  constructor(private router: Router){
    this.aber = '';
    this.bol = false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.aber = String(localStorage.getItem('premium'))
    if (this.aber == '1'){
      this.bol = true;
    }
    return this.bol
  }
  
}
