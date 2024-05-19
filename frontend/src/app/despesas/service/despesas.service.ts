import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesas } from '../model/Despesas';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private httpClient: HttpClient) { }

  save(despesa: Despesas){
    return this.httpClient.post<Despesas>('http://localhost:8080/despesas', despesa); 
  }
  
}
