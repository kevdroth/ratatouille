import { Injectable } from '@angular/core';
import data from '../../../../mockdata/data.json';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getRecetas(){
    return data
  }
}
