import { Injectable } from '@angular/core';
import data from '../../../assets/mockdata/data.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private router: Router) { }

  getReceta(id: number){
    const {recetas} = data
    const receta = recetas.filter(f => f.idReceta == id )
    if (receta.length == 0){
      throw new Error("No hay receta");
    }
    return receta
  }
}
