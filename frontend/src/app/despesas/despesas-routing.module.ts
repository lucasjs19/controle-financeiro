import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { LancarDespesasComponent } from './lancar-despesas/lancar-despesas.component';

const routes: Routes = [
  { path: '', component: DespesasComponent},
  { path: 'lancar', component: LancarDespesasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
