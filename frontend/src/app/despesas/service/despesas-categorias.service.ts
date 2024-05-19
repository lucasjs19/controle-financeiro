import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DespesaCategoria } from '../model/DespesaCategoria';
import { DespesasGrupo } from '../model/DespesaGrupo';

@Injectable({
  providedIn: 'root'
})
export class DespesasCategoriasService {

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<DespesaCategoria[]>('http://localhost:8080/despesas-categorias');;
  }

  getDespesaCategoriaById(id: number): Observable<DespesaCategoria>{
    return this.httpClient.get('http://localhost:8080/despesas-categorias/' + id).pipe(
      map((data: any) => {
        const despesaGrupo = {
          id: data.despesasGrupos.id,
          descricao: data.despesasGrupos.id 
        } as DespesasGrupo;
        return {
          id: data.id,
          descricao: data.descricao,
          despesaGrupo: despesaGrupo
        } as DespesaCategoria;
      })
    );
  }

  getDespesaCategoriaByGrupo(idGrupo: number): Observable<DespesaCategoria[]>{
    return this.httpClient.get<DespesaCategoria[]>('http://localhost:8080/despesas-categorias/grupo/' + idGrupo).pipe(
      map((data: any[]) => {
        return data.map(item => {
          const despesaGrupo = {
            id: item.despesasGrupos.id,
            descricao: item.despesasGrupos.id 
          } as DespesasGrupo;
          return {
            id: item.id,
            descricao: item.descricao,
            despesaGrupo: despesaGrupo
          } as DespesaCategoria;
        })
      })
    );
  }
}
