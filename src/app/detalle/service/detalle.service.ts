import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/recetas.interface';
import data from '../../../mockdata/data.json';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  producto: Producto[] = [
    {
      marca: 'oreo',
      receta: [
        {
          nombre: 'Brigadeiros de <b>Oreo</b> y Lincoln',
          foto: 'assets/img/oreo/img-ppal3.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Budín de Naranja con Mini <b>Oreo</b> y <b>Milka</b>',
          foto: 'assets/img/oreo/img-ppal4.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cheesecake de <b>Milka</b> y <b>Oreo</b> Golden',
          foto: 'assets/img/oreo/img-ppal5.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cheesecake de <b>Oreo</b> con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal7.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Choco <b>Oreo</b> con <b>Milka</b> Bis <b>Oreo</b>',
          foto: 'assets/img/oreo/img-ppal8.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Conitos <b>Oreo</b> con chocolate <b>Milka</b> Leche',
          foto: 'assets/img/oreo/img-ppal9.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cookies rellenas de <b>Oreo</b>',
          foto: 'assets/img/oreo/img-ppal10.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Funge <b>Milka</b> Blanco con <b>Oreo</b>',
          foto: 'assets/img/oreo/img-ppal12.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Hot Cakes <b>Oreo</b> con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal13.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Muffins de Bizcochuelo <b>Royal</b> con corazón de <b>Oreo</b>',
          foto: 'assets/img/oreo/img-ppal14.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Tarta <b>Oreo</b> & <b>Milka</b> Blanco',
          foto: 'assets/img/oreo/img-ppal17.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Torta Duquesa con Lincoln y postre <b>Royal</b> de chocolate',
          foto: 'assets/img/oreo/img-ppal18.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Triffles de <b>Oreo</b> y dulce de leche con crema de frutillas y Cadbury Yoghurt',
          foto: 'assets/img/oreo/img-ppal20.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Volcán de chocolate <b>Milka</b> Blanco y <b>Oreo</b> con corazón de dulce de leche',
          foto: 'assets/img/oreo/img-ppal21.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de <b>Oreo</b> por 118 g.',
            },
            {
              nombre: '1 paquete de Lincoln',
            },
            {
              nombre: '2 Chocolates Cadbury 3 Sueños por 80 g.',
            },
            {
              nombre: '400 g de leche condensada',
            },
            {
              nombre: '50 g de manteca',
            },
          ],
          preparacion: [
            {
              nombre:
                'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre:
                'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de <b>Oreo</b> partidas con la mano.',
            },
            {
              nombre:
                'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre:
                'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getProductos(marca: string) {
    return data.filter((f) => f.nombre == marca);
  }
}
