import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './bancos/bancos.component';
import { CadastrarBancosComponent } from './cadastrar-bancos/cadastrar-bancos.component';
import { EditarBancosComponent } from './editar-bancos/editar-bancos.component';

const routes: Routes = [
  { path: '', component: BancosComponent},
  {path: 'cadastrar', component: CadastrarBancosComponent},
  {path: 'editar/:id', component: EditarBancosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }
