import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable, of } from 'rxjs';
import { Cartoes } from '../model/cartoes';
import { Router } from '@angular/router';
import { BancosService } from '../../bancos/service/bancos.service';
import { CartoesService } from '../service/cartoes.service';
import { Bancos } from '../../bancos/model/bancos';

@Component({
  selector: 'app-cadastrar-cartoes',
  standalone: true,
  imports: [FormsModule, CommonModule, AppMaterialModule],
  templateUrl: './cadastrar-cartoes.component.html',
  styleUrl: './cadastrar-cartoes.component.scss'
})
export class CadastrarCartoesComponent {

  bancos: Observable<Bancos[]> = of([]);
  bancosList: Bancos[] = [];

  constructor(
    private router: Router,
    private cartoesService: CartoesService,
    private bancosService: BancosService,
  ) {
    this.bancos = this.bancosService.list();
    this.bancos.subscribe(bancosList => {
      this.bancosList = bancosList;
    })
  }

  inputName: string = '';
  selectedBanco: number = 0;

  salvar(){
    this.bancosService.getBancoById(this.selectedBanco).
    subscribe(banco => {
      const cartao = {
        id: null,
        nome: this.inputName,
        banco: banco
      };
      this.cartoesService.saveCartao(cartao).subscribe({
        error: () => {
          alert("Ocorreu um erro ao cadastrar o cartão!");
          this.router.navigate(['cartoes']);
        },
        complete: () => {
          alert("Cartão cadastrado");
          this.router.navigate(['cartoes']);
        }
      })
    })
  }

  cancelar(){
    this.router.navigate(['home'])
  }

}
