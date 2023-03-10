import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './pages/receta/receta.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LegalesComponent } from './pages/legales/legales.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    RecetaComponent,
    RegistroComponent,
    LegalesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
