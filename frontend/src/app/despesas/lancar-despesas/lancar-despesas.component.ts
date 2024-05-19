import { Component, Inject, input } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment/locale/pt-br'
import { Router } from '@angular/router';
import { TipoDespesa } from '../model/TipoDespesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';
import { Cartoes } from '../../cartoes/model/cartoes';
import { CartoesService } from '../../cartoes/service/cartoes.service';
import { DespesasService } from '../service/despesas.service';
import { DespesasCategoriasService } from '../service/despesas-categorias.service';
import { DespesaCategoria } from '../model/DespesaCategoria';
import { DespesasGrupo } from '../model/DespesaGrupo';
import { DespesasGruposService } from '../service/despesas-grupos.service';


@Component({
  selector: 'app-lancar-despesas',
  standalone: true,
  imports: [AppMaterialModule, MatMomentDateModule],
  templateUrl: './lancar-despesas.component.html',
  styleUrl: './lancar-despesas.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter()
  ]
})

export class LancarDespesasComponent {

  inputDescricao: String = '';
  dataSelecionada: Date;
  tipoDespesaSelecionada: number = 0;
  categoriaDespesaSelecionada: number = 0;
  grupoDespesaSelecionada: number = 0;
  cartaoCreditoSelecionado: number = 0;
  valor: number = 0;
  parcela: number = 1;

  tiposDepesasList: TipoDespesa[] = [];
  cartaoCreditoList: Cartoes[] = [];
  categoriasDespesaList: DespesaCategoria[] = [];
  gruposDespesaList: DespesasGrupo[] = [];

  constructor(
    private router: Router,
    private tipoDespesaService: TipoDespesaService,
    private despesasCategoriaService: DespesasCategoriasService,
    private cartaoCreditoService: CartoesService,
    private despesasService: DespesasService,
    private despesasGrupoService: DespesasGruposService
  ) {
    this.dataSelecionada = new Date();

    this.tipoDespesaService.list().subscribe(tiposDespesasList => {
      this.tiposDepesasList = tiposDespesasList;
    })
    this.cartaoCreditoService.list().subscribe(cartaoCreditoList => {
      this.cartaoCreditoList = cartaoCreditoList;
    })
    despesasGrupoService.list().subscribe(despesaGrupoList => {
      this.gruposDespesaList = despesaGrupoList;
    })
  }

  onGrupoDespesaChange(idGrupo: number) {
    this.despesasCategoriaService.getDespesaCategoriaByGrupo(idGrupo).subscribe(categoriasDespesaList => {
      this.categoriasDespesaList = categoriasDespesaList;
    })
  }

  onDataSelecionadaChange(event: any) {
    this.dataSelecionada = event.value;
  }

  salvar() {

    this.tipoDespesaService.getTipoById(this.tipoDespesaSelecionada).subscribe(
      (tipoDespesa: any) => {
        this.despesasCategoriaService.getDespesaCategoriaById(this.categoriaDespesaSelecionada).subscribe(
          (categoriaDespesa: any) => {
            this.despesasGrupoService.getDespesaGrupoById(this.grupoDespesaSelecionada).subscribe(
              (grupoDespesa: any) => {
                const despesaNova = {
                  id: null,
                  descricao: this.inputDescricao,
                  vencimento: this.dataSelecionada,
                  valor: this.valor,
                  parcela: this.parcela,
                  despesasTipo: tipoDespesa,
                  despesasCategorias: categoriaDespesa,
                  despesasGrupos: grupoDespesa
                };
                console.log(despesaNova)
    
                this.despesasService.save(despesaNova).subscribe({
                  error: () => {
                    alert("Ocorreu um erro ao lançar a despesa");
                    window.location.reload();
                  },
                  complete: () => {
                    alert("Despesa lançada com sucesso!");
                    window.location.reload();
                  }
                })
              })
          }
        );
      }
    )
  }

  cancelar() { }

  
}
