import { Injectable } from '@angular/core';
import data from '../../../../mockdata/data.json';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {

  constructor() {}

  getProductos(){
    return data
  }
}
