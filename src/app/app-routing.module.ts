import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LegalesComponent } from './pages/legales/legales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detalle/:titulo',
    component: DetalleComponent,
  },
  {
    path: 'receta/:idReceta',
    component: RecetaComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'legales',
    component: LegalesComponent,
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
