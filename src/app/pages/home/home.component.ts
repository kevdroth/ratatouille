import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/interfaces/product.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  marca: Marcas[] = []

  constructor(private router: Router, private service: AppService){}

  ngOnInit(): void {
    this.marca = this.service.products().producto
  }

}
