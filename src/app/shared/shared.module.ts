import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuDialogComponent } from './header/components/menu-dialog/menu-dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SkeletonDetalleComponent } from './skeleton/skeleton-detalle/skeleton-detalle.component';
import { SkeletonRecetaComponent } from './skeleton/skeleton-receta/skeleton-receta.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuDialogComponent,
    ScrollToTopComponent,
    SkeletonDetalleComponent,
    SkeletonRecetaComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [HeaderComponent, FooterComponent, ScrollToTopComponent, SkeletonDetalleComponent, SkeletonRecetaComponent]
})
export class SharedModule { }
