import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartoes } from '../model/cartoes';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cartoes[]>('http://localhost:8080/cartoes');;
  }

  saveCartao(cartao: Cartoes){
    return this.httpClient.post<Cartoes>('http://localhost:8080/cartoes', cartao);
  }

  getBancoById(id: number): Observable<Cartoes> {
    return this.httpClient.get('http://localhost:8080/cartoes/' + id).pipe(
      map((data: any) => {
        return {
          id: data.id || null,
          nome: data.nome,
          banco: data.banco
        } as Cartoes;
      })
    )
  }
}
