import { Injectable } from '@angular/core';
import product from '../../assets/mockdata/product.json'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  products(){
    return product
  }
}
