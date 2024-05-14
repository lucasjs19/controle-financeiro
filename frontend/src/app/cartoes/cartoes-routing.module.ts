import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesComponent } from './cartoes/cartoes.component';
import { CadastrarCartoesComponent } from './cadastrar-cartoes/cadastrar-cartoes.component';
import { EditarCartoesComponent } from './editar-cartoes/editar-cartoes.component';

const routes: Routes = [
  { path: '', component: CartoesComponent},
  {path: 'cadastrar', component: CadastrarCartoesComponent},
  {path: 'editar/:id', component: EditarCartoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartoesRoutingModule { }
