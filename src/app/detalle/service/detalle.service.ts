import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/recetas.interface';
import data from '../../../mockdata/data.json';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  producto: Producto[] = [
    {
      marca: 'oreo',
      receta: [
        {
          nombre: 'Brigadeiros de Oreo y Lincoln',
          foto: 'assets/img/oreo/img-ppal3.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Budín de Naranja con Mini Oreo y Milka',
          foto: 'assets/img/oreo/img-ppal4.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cheesecake de Milka y Oreo Golden',
          foto: 'assets/img/oreo/img-ppal5.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cheesecake de Oreo con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal7.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Choco Oreo con Milka Bis Oreo',
          foto: 'assets/img/oreo/img-ppal8.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Conitos Oreo con chocolate Milka Leche',
          foto: 'assets/img/oreo/img-ppal9.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Cookies rellenas de Oreo',
          foto: 'assets/img/oreo/img-ppal10.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Funge Milka Blanco con Oreo',
          foto: 'assets/img/oreo/img-ppal12.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Hot Cakes Oreo con Cadbury 3 Sueños',
          foto: 'assets/img/oreo/img-ppal13.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Muffins de Bizcochuelo Royal con corazón de Oreo',
          foto: 'assets/img/oreo/img-ppal14.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Tarta Oreo & Milka Blanco',
          foto: 'assets/img/oreo/img-ppal17.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre: 'Torta Duquesa con Lincoln y postre Royal de chocolate',
          foto: 'assets/img/oreo/img-ppal18.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Triffles de Oreo y dulce de leche con crema de frutillas y Cadbury Yoghurt',
          foto: 'assets/img/oreo/img-ppal20.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
        {
          nombre:
            'Volcán de chocolate Milka Blanco y Oreo con corazón de dulce de leche',
          foto: 'assets/img/oreo/img-ppal21.jpg',
          ingredientes: [
            {
              nombre: '1 paquete de Oreo por 118 g.',
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
              nombre: 'Poner en una cacerola le leche condensada con el chocolate picado y la manteca.',
            },
            {
              nombre: 'Llevar al fuego hasta que se derrita bien todo siempre revolviendo.',
            },
            {
              nombre: 'Agregar el paquete de Oreo partidas con la mano.',
            },
            {
              nombre: 'Cuando espesa, retirar del fuego, poner en un bowl y llevar a la heladera 30 minutos.',
            },
            {
              nombre: 'Luego hacer pelotitas del mismo tamaño y pasar por Lincoln picadas!',
            },
          ],
        },
      ],
    },
  ];

  constructor() { }

  getProductos(marca: string){
    return data.filter(f => f.nombre == marca)
  }
}
