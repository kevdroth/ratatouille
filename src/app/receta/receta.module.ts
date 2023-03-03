import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { RecetaComponent } from './receta.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RecetaComponent],
  imports: [
    CommonModule,
    RecetaRoutingModule,
    SharedModule
  ]
})
export class RecetaModule { }
