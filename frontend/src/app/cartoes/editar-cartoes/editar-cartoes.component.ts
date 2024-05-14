import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Cartoes } from '../model/cartoes';
import { ActivatedRoute, Router } from '@angular/router';
import { CartoesService } from '../service/cartoes.service';
import { Bancos } from '../../bancos/model/bancos';
import { BancosService } from '../../bancos/service/bancos.service';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-cartoes',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './editar-cartoes.component.html',
  styleUrl: './editar-cartoes.component.scss'
})
export class EditarCartoesComponent {
  cartao: Observable<Cartoes>
  cartaoId: any;
  bancoId: number = 0;
  bancos: Observable<Bancos[]> = of([]);
  bancosList: Bancos[] = [];
  banco: Bancos = { id: null, nome: ''};


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartoesService: CartoesService,
    private bancosService: BancosService
  ){
    this.cartaoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.cartao = this.cartoesService.getBancoById(this.cartaoId).pipe(
      map((data: any) => {
        return {
          id: data.id || null,
          nome: data.nome,
          banco: data.banco
        } as Cartoes;
      })
    );
    this.bancos = this.bancosService.list();
    this.bancos.subscribe(bancosList => {
      this.bancosList = bancosList;
    })
  }

  cancelar(){
    this.router.navigate(['/cartoes'])
  }

  salvar(nome: string, bancoId: any){
    this.bancosService.getBancoById(bancoId).
    subscribe(banco => {
      const bancoAtualizado = {
        id: banco.id,
        nome: banco.nome
      };
      this.cartao.subscribe(cartao => {
        const cartaoAtualizado = {
          id: cartao.id,
          nome: nome,
          banco: bancoAtualizado
        };
        this.cartoesService.saveCartao(cartaoAtualizado).subscribe({
          error: () => {
            alert("Ocorreu um erro ao atualizar o cartão!")
            this.router.navigate(['cartoes']);
          },
          complete: () => {
            alert("Cartão atualizado!");
            this.router.navigate(['cartoes'])
          }
        })
      })
    })
  }
}
