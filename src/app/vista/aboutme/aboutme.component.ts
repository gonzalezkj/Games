import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/informacion.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(info:InformacionService) { }

  ngOnInit(): void {
  }

}
