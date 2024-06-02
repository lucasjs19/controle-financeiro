import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable, map, of } from 'rxjs';
import { vwDespesasMensais } from '../model/vwDespesasMensais';
import { DespesasService } from '../service/despesas.service';
import { Despesas } from '../model/Despesas';

interface Mes {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-despesas',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.scss'
})
export class DespesasComponent {

  despesasMensaisTotal: Observable<vwDespesasMensais[]> = of([]);
  despesasDetalhadas: Observable<Despesas[]> = of([]);
  despesasPagas: Observable<Despesas[]> = of([]);
  despesasMensais: Observable<Despesas[]> = of([]);
  displayedColumnsTotal = ['mesAno', 'valor'];
  displayedColumnsDetalhada = ['descricao', 'vencimento', 'tipo', 'grupo', 'categoria', 'valor', 'parcela', 'pagar'];
  displayedColumnsMensais = ['descricao', 'tipo', 'grupo', 'categoria', 'valor'];


  constructor(private despesaService: DespesasService) {
    this.despesasMensaisTotal = this.despesaService.listDespesasMensaisTotal();
    this.despesasDetalhadas = this.despesaService.listDespesasDetalhadas();
    this.despesasMensais = this.despesaService.listDespesasMensais();
    this.despesasPagas = this.despesaService.listDespesasPagas();
  }


  formatMesAno(mesAno: string): string {
    const [year, month] = mesAno.split('/');
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${monthNames[+month - 1]}/${year}`;
  }

  onPay(id: number){
    this.despesaService.payDespesa(id).subscribe({
      error: () => {
        alert("Ocorreu um erro ao pagar a despesa!")
        this.despesasMensaisTotal = this.despesaService.listDespesasMensaisTotal();
        this.despesasDetalhadas = this.despesaService.listDespesasDetalhadas();
        this.despesasMensais = this.despesaService.listDespesasMensais();
        this.despesasPagas = this.despesaService.listDespesasPagas();
      },
      complete: () => {
        alert("Despesa paga!");
        this.despesasMensaisTotal = this.despesaService.listDespesasMensaisTotal();
        this.despesasDetalhadas = this.despesaService.listDespesasDetalhadas();
        this.despesasMensais = this.despesaService.listDespesasMensais();
        this.despesasPagas = this.despesaService.listDespesasPagas();
      }
    }
    );
  }

  onUnpay(id: number){
    this.despesaService.unPayDespesa(id).subscribe({
      error: () => {
        alert("Ocorreu um erro ao abrir a despesa!")
        this.despesasMensaisTotal = this.despesaService.listDespesasMensaisTotal();
        this.despesasDetalhadas = this.despesaService.listDespesasDetalhadas();
        this.despesasMensais = this.despesaService.listDespesasMensais();
        this.despesasPagas = this.despesaService.listDespesasPagas();
      },
      complete: () => {
        alert("Despesa aberta!");
        this.despesasMensaisTotal = this.despesaService.listDespesasMensaisTotal();
        this.despesasDetalhadas = this.despesaService.listDespesasDetalhadas();
        this.despesasMensais = this.despesaService.listDespesasMensais();
        this.despesasPagas = this.despesaService.listDespesasPagas();
      }
    }
    );
  }

  
}


