import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../../assets/mockdata/data.json';
import { AppService } from '../../../services/app.service';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {

  constructor(private router: Router, private service: AppService) {}

  getProductos(marca: string){
    const { recetas, marcas } = data;
    marca = marca.toLowerCase()
    const producto = recetas.filter(f =>
      f.titulo.marca1.toLowerCase().includes(marca) || f.titulo.marca2.toLowerCase().includes(marca)
    );
    const marcasFiltradas = marcas.filter(f =>
      f.nombre.toLowerCase().includes(marca)
    );
    if (producto.length == 0){
      throw new Error("No hay producto");
      
    }
    return { producto, marcasFiltradas }
  }

}
