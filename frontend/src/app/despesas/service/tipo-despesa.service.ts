import { Injectable } from '@angular/core';
import { TipoDespesa } from '../model/TipoDespesa';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDespesaService {

  constructor(private httpClient: HttpClient) { }

  list(){ 
    return this.httpClient.get<TipoDespesa[]>('http://localhost:8080/despesas-tipo');
  }

  getTipoById(id: number){
    return this.httpClient.get('http://localhost:8080/despesas-tipo/' + id).pipe(
      map((data: any) => {
        return {
          id: data.id,
          descricao: data.descricao
        } as TipoDespesa;
      })
    )
  }
}
