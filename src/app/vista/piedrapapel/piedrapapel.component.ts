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
  localvictorias: Storage;
  localderrotas: Storage;

  constructor(private playGame: GameService) {
    this.result = '';
    this.localvictorias = localStorage;
    this.localderrotas = localStorage;
  }

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.localvictorias.setItem('victoriapiedrapapel', String(this.pointsUser));
    this.pointsComp += result.compAdd;
    this.localvictorias.setItem('derrotapiedrapapel', String(this.pointsComp));
  }
}