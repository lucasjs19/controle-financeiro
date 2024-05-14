import { Injectable } from '@angular/core';
import { TipoDespesa } from '../model/TipoDespesa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDespesaService {

  constructor(private httpClient: HttpClient) { }

  list(){ 
    return this.httpClient.get<TipoDespesa[]>('http://localhost:8080/despesas-tipo');;
}
}
