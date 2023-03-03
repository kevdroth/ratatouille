import { Injectable } from '@angular/core';
import data from '../../assets/mockdata/data.json'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  products(){
    return data
  }
}
