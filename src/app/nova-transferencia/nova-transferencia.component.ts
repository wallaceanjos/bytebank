import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent{

  // Cria apenas um objeto
  // @Output() aoTransferir;

  // Cria um objeto com mais recursos, objeto de EventEmitter tipado com generics any que pode receber tanto um valor quanto um caminho ou ambos
  // @Output() aoTransferi = new EventEmitter<any>();

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  constructor( private service: TransferenciaService){}

  transferir(){
    console.log('transferência chamada com sucesso');
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    }
    this.aoTransferir.emit( valorEmitir )

    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }

}
