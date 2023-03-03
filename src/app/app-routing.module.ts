import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'detalle/:titulo',
    loadChildren: () =>
      import('./detalle/detalle.module').then((m) => m.DetalleModule),
  },
  {
    path: 'receta/:idReceta',
    loadChildren: () =>
      import('./receta/receta.module').then((m) => m.RecetaModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: 'legales',
    loadChildren: () =>
      import('./legales/legales.module').then((m) => m.LegalesModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
