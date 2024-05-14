import { Component, Inject } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import 'moment/locale/pt-br'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TipoDespesa } from '../model/TipoDespesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';


@Component({
  selector: 'app-lancar-despesas',
  standalone: true,
  imports: [AppMaterialModule, MatMomentDateModule ],
  templateUrl: './lancar-despesas.component.html',
  styleUrl: './lancar-despesas.component.scss',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideMomentDateAdapter()
  ]
})

export class LancarDespesasComponent {

  inputDescricao: String = '';
  dataSelecionada: Date;
  tipoDespesaSelecionada: number = 0;

  tiposDespesa: Observable<TipoDespesa[]> = of([]);
  tiposDepesasList: TipoDespesa[] = [];

  constructor(
    private router: Router,
    private tipoDespesaService: TipoDespesaService,
  ) {
    this.dataSelecionada = new Date();
    this.tiposDespesa = this.tipoDespesaService.list();
    this.tiposDespesa.subscribe(tiposDespesasList => {
      this.tiposDepesasList = tiposDespesasList;
    })
  }


  onDataSelecionadaChange(event: any) {
    this.dataSelecionada = event.value;
    console.log('Data selecionada:', this.dataSelecionada);
  }

  salvar(){

  }

  cancelar(){}
}
