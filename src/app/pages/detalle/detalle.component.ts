import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleService } from './service/detalle.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  producto!: any;
  marcaTitulo!: string;
  ig!: string;

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(map(({ titulo }) => (this.marcaTitulo = titulo)))
      .subscribe({
        next: (tituloMarca) =>
          (this.producto = this.detalleService.getProductos(tituloMarca)),
      });
    this.setIg()
  }

  setIg() {
    switch (this.marcaTitulo) {
      case 'Oreo':
        this.ig = 'https://www.instagram.com/recetoreo/?hl=es-la';
        break;
      case 'Milka':
        this.ig = 'https://www.instagram.com/milka_argentina/';
        break;
      default:
        this.ig = '';
        break;
    }
  }
}
