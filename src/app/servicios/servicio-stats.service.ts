import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioStatsService {

  mensaje: string;
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObsevable = this.enviarMensajeSubject.asObservable();

  constructor(){
    this.mensaje = '';
  }
 
  enviarMensaje(mensaje: string){
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }

}
