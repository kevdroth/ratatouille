import { Injectable } from '@angular/core';
import data from '../../../../mockdata/data.json';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getReceta(id: number){
    const {recetas} = data
    const receta = recetas.filter(f => f.idReceta == id )
    return receta
  }
}
