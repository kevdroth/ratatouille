import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './pages/receta/receta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    RecetaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
