import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

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

  constructor( private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log('transferência chamada com sucesso');
    
    // const valorEmitir = { valor: this.valor, destino: this.destino };
    const valorEmitir: Transferencia = {
      valor : this.valor,
      destino: this.destino,
    };
    
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
    this.limparCampos();
    this.router.navigateByUrl('extrato')

    // this.aoTransferir.emit( valorEmitir )

  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }

}
