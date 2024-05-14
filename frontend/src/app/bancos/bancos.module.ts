import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BancosRoutingModule,
    AppMaterialModule
  ]
})
export class BancosModule { }
