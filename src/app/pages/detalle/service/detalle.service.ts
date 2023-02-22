import { Injectable } from '@angular/core';
import data from '../../../../mockdata/data.json';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {

  constructor() {}

  getProductos(marca: string){
    const { recetas } = data;
    marca = marca.toLowerCase()
    const producto = recetas.filter(f =>
      f.titulo.marca1.toLowerCase().includes(marca) || f.titulo.marca2.toLowerCase().includes(marca)
    );
    return producto
  }
}
