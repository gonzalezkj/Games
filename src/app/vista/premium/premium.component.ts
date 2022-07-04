import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  premium:boolean = false;
  userpremium:number = 0;
  localpremium:Storage;

  constructor() {
    this.premium = false;
    this.userpremium = 0;
    this.localpremium = localStorage;
   }

  ngOnInit(): void {
  }

  premiumUser(){
    this.premium = true;
    if (this.premium == true){
      this.userpremium = 1;
      this.localpremium.setItem('premium', String(this.userpremium));
      console.log(this.localpremium)
    }
  }

}

