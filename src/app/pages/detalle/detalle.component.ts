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

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const asd = this.activatedRoute.params.pipe(
      map(({titulo}) => titulo),
      // tap( titulo => console.log(titulo ) )
      ).subscribe(r => this.producto = this.detalleService.getProductos(r));
      console.log("🚀 ~ producto:", this.producto)

    ;
  }
}
