import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcadoerror',
  templateUrl: './ahorcadoerror.component.html',
  styleUrls: ['./ahorcadoerror.component.css']
})
export class AhorcadoerrorComponent implements OnInit {

  @Input() errores: any

  constructor() { }

  ngOnInit(): void {
  }

  

}
