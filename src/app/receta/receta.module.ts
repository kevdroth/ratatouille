import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { RecetaComponent } from './receta.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular'


@NgModule({
  declarations: [RecetaComponent],
  imports: [
    CommonModule,
    RecetaRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class RecetaModule { }
