import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bancos } from '../model/bancos';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  constructor(private httpClient: HttpClient) { }

  saveBanco(banco: Bancos): Observable<Bancos> {
    return this.httpClient.post<Bancos>('http://localhost:8080/bancos', banco);
  }

  list() {
    return this.httpClient.get<Bancos[]>('http://localhost:8080/bancos');;
  }

  getBancoById(id: number): Observable<Bancos> {
    return this.httpClient.get('http://localhost:8080/bancos/' + id).pipe(
      map((data: any) => {
        return {
          id: data.id || null,
          nome: data.nome
        } as Bancos;
      })
    )
  }
}
