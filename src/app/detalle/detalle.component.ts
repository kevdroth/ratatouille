import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from './service/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() marcaSelect: string = 'terrabusi';

  producto!: any[]

  constructor(private detalleService: DetalleService, private router: Router) {}

  ngOnInit(): void {
    this.producto = this.detalleService.getProductos(this.marcaSelect);
    console.log("🚀 ~ prod", this.producto)

  }
}
