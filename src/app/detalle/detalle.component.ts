import { Component, Input, OnInit } from '@angular/core';
import { Recetas, Producto } from '../interfaces/recetas.interface';
import { DetalleService } from './service/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() marcaSelect: string = 'oreo';

  producto!: any[]

  constructor(private detalleService: DetalleService) {}

  ngOnInit(): void {
    this.producto = this.detalleService.getProductos(this.marcaSelect);
    console.log("🚀 ~ prod", this.producto)

  }
}
