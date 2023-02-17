import { Injectable } from '@angular/core';
import data from '../../../../mockdata/data.json';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getRecetas(id:number){
    return data.recetas.filter(f => f.idReceta === id)
  }

  getReceta(id: number){
    return data
  }

}
