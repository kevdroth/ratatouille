import { Component } from '@angular/core';
import { Recetas, Producto } from '../interfaces/recetas.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  producto: Producto[] = [
    {
      marca: 'oreo',
      receta: [
        {
          nombre: 'Brigadeiros de Oreo y Lincoln',
          foto: 'assets/img/oreo/img-ppal3.jpg',
        },
        {
          nombre: 'Budín de Naranja con Mini Oreo y Milka',
          foto: 'assets/img/oreo/img-ppal4.jpg',
        },
        {
          nombre: 'Cheesecake de Milka y Oreo Golden',
          foto: 'assets/img/oreo/img-ppal5.jpg',
        },
        {
          nombre: 'Cheesecake de Oreo con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal7.jpg',
        },
        {
          nombre: 'Choco Oreo con Milka Bis Oreo',
          foto: 'assets/img/oreo/img-ppal8.jpg',
        },
        {
          nombre: 'Conitos Oreo con chocolate Milka Leche',
          foto: 'assets/img/oreo/img-ppal9.jpg',
        },
        {
          nombre: 'Cookies rellenas de Oreo',
          foto: 'assets/img/oreo/img-ppal10.jpg',
        },
        {
          nombre: 'Funge Milka Blanco con Oreo',
          foto: 'assets/img/oreo/img-ppal12.jpg',
        },
        {
          nombre: 'Hot Cakes Oreo con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal13.jpg',
        },
        {
          nombre: 'Muffins de Bizcochuelo Royal con corazón de Oreo',
          foto: 'assets/img/oreo/img-ppal14.jpg',
        },
        {
          nombre: 'Tarta Oreo & Milka Blanco',
          foto: 'assets/img/oreo/img-ppal17.jpg',
        },
        {
          nombre: 'Torta Duquesa con Lincoln y postre Royal de chocolate',
          foto: 'assets/img/oreo/img-ppal18.jpg',
        },
        {
          nombre: 'Triffles de Oreo y dulce de leche con crema de frutillas y Cadbury Yoghurt',
          foto: 'assets/img/oreo/img-ppal20.jpg',
        },
        {
          nombre: 'Volcán de chocolate Milka Blanco y Oreo con corazón de dulce de leche',
          foto: 'assets/img/oreo/img-ppal21.jpg',
        }
      ],
    },
  ];
}
