import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = 'http://localhost:3000/transferencias';
  private listaTransferencia : any[];

  // Se precisarmos de requisições get, post, delete... é ela que vai fazer
  constructor( private httpClient: HttpClient) {
    this.listaTransferencia = []
  }

  get transferencias(){
    return this.listaTransferencia
  }

  // O httpClient é equivalente a um navegador que retorna o conteúdo de uma url
  todas(): Observable<Transferencia[]>{
    // a tipagem do get é porque por padrão ele retorna um observable
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // metodo generico para criar transferencia
  // vou receber a transferencia no parâmetro onde essa classe for injetada
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia)
    return this.httpClient.post<Transferencia>(this.url, transferencia )
    // this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    // aqui vão as regras de negócio
    // validar a hora da transferencia
    // verificar saldo
    transferencia.data = new Date();
  }

}
