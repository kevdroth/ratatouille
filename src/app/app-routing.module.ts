import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { shouldPreload: true },
  },
  {
    path: 'detalle/:titulo',
    loadChildren: () =>
      import('./detalle/detalle.module').then((m) => m.DetalleModule),
    data: { preload: true },
  },
  {
    path: 'receta/:idReceta',
    loadChildren: () =>
      import('./receta/receta.module').then((m) => m.RecetaModule),
    data: { preload: true },
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroModule),
    data: { preload: true },
  },
  {
    path: 'legales',
    loadChildren: () =>
      import('./legales/legales.module').then((m) => m.LegalesModule),
    data: { preload: true },
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
