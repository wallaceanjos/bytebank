import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any;
//  valor : number;
//  destino : number;

  transferir($event){

    this.transferencia.valor = $event.valor;
    this.transferencia.destino = $event.destino;
    console.log($event);

  }
}
