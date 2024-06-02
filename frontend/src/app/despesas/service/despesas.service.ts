import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesas } from '../model/Despesas';
import { vwDespesasMensais } from '../model/vwDespesasMensais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private httpClient: HttpClient) { }

  save(despesa: Despesas){
    return this.httpClient.post<Despesas>('http://localhost:8080/despesas', despesa); 
  }

  listDespesasMensaisTotal(){
    return this.httpClient.get<vwDespesasMensais[]>('http://localhost:8080/despesas-mensais-total');
  }

  listDespesasDetalhadas(){
    return this.httpClient.get<Despesas[]>('http://localhost:8080/despesas-detalhadas');
  }
  
  listDespesasMensais(){
    return this.httpClient.get<Despesas[]>('http://localhost:8080/despesas-mensais');
  }

  listDespesasPagas(){
    return this.httpClient.get<Despesas[]>('http://localhost:8080/despesas/pagas')
  }

  payDespesa(id: number): Observable<any> {
    const url =  'http://localhost:8080/despesas/pagar/' + id
    return this.httpClient.put(url,null);
  }

  unPayDespesa(id: number): Observable<any> {
    const url =  'http://localhost:8080/despesas/aberto/' + id
    return this.httpClient.put(url,null);
  }
  
}
