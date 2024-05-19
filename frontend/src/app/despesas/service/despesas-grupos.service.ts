import { Injectable } from '@angular/core';
import { DespesasGrupo } from '../model/DespesaGrupo';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesasGruposService {

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<DespesasGrupo[]>('http://localhost:8080/despesas-grupos');;
  }

  getDespesaGrupoById(id: number): Observable<DespesasGrupo>{
    return this.httpClient.get('http://localhost:8080/despesas-grupos/' + id).pipe(
      map((data: any) => {
        return {
          id: data.id,
          descricao: data.descricao
        } as DespesasGrupo;
      })
    );
  }

}
