import { Transferencia } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @Input() transferencias : any[];
  // Como estou usando um service não preciso mais passar a transação por um parametro no template usando @Input

  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    // estou me inscrevendo no observable para quando o get for acionado eu saber o que foi enviado
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias)
      this.transferencias = transferencias;
    })
  }

}
