import { Component, OnInit } from '@angular/core';
import { Marcas } from 'src/interfaces/recetas.interface';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
})
export class MenuDialogComponent implements OnInit {
  marcaPrincipal: Marcas[] = [];
  marcaSecundarias: Marcas[] = [];
  showMarcas: boolean = false;
  showMarcasSecundarias: boolean = false;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.marcaPrincipal = this.service
      .products()
      .marcas.filter(
        (f) =>
          f.nombre.toLowerCase().includes('oreo') ||
          f.nombre.toLowerCase().includes('lincoln')
      );
    this.marcaSecundarias = this.service
      .products()
      .marcas.filter(
        (f) =>
          !f.nombre.toLowerCase().includes('oreo') &&
          !f.nombre.toLowerCase().includes!('lincoln')
      );
  }
}
