import { Component, OnInit } from '@angular/core';
import { GameService } from './piedrapapel.service';

@Component({
  selector: 'app-piedrapapel',
  templateUrl: './piedrapapel.component.html',
  styleUrls: ['./piedrapapel.component.css']
})
export class PiedrapapelComponent implements OnInit {

  result: string;
  pointsUser = 0;
  pointsComp =  0;

  constructor(private playGame: GameService) {
    this.result = '';
  }

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }
}