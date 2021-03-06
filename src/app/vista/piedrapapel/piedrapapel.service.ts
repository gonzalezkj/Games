import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
    constructor() {}
    /**
     * Math Random para generar un random y multiplicamos por 3
     * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
     * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
     */
    getComputerChoice(): string {
        const choices = ['r', 'p', 's']; // Roca, Papel, Tijeras
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
    }

    game(userChoice: string): 
    {
        message: string;
        userAdd: number;
        compAdd: number;
    } 
    {
        const playUserComp = userChoice + this.getComputerChoice();
        console.log(`Jugada realizada: ${playUserComp}`);
        let playStatus!: {
          message: string;
          userAdd: number;
          compAdd: number;
        };
        switch (playUserComp) {
          // Ganamos
          case 'rs':
          case 'sp':
          case 'pr':
            playStatus = {
              message: 'You beat the computer',
              userAdd: 1,
              compAdd: 0,
            };
            break;
          // Gana la computadora
          case 'rp':
          case 'ps':
          case 'sr':
            playStatus = {
              message: 'The computer beat you',
              userAdd: 0,
              compAdd: 1,
            };
            break;
          // Empatamos
          case 'rr':
          case 'pp':
          case 'ss':
            playStatus = {
              message: 'You tied with the computer',
              userAdd: 0,
              compAdd: 0,
            };
            break;
        }
        return playStatus;
      }
}