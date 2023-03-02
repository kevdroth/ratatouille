import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/interfaces/product.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  marca: Marcas[] = [];

  constructor(private router: Router, private service: AppService) {}

  ngOnInit(): void {
    this.marca = this.service.products().producto;
    this.parallax();
  }

  parallax() {
    let oreo = document.getElementById('oreo');
    let condimento = document.getElementById('condimento');
    let platoTorta = document.getElementById('platoTorta');
    let frutosSecos = document.getElementById('frutosSecos');
    let chocoBarra = document.getElementById('chocoBarra');
    let platoGalletas = document.getElementById('platoGalletas');
    let lincoln = document.getElementById('lincoln');
    let cuchara = document.getElementById('cuchara');
    let sec = document.getElementById('sec');

    window.addEventListener('scroll', function () {
      let value = this.window.scrollY;
      oreo!.style.top = value * 0.7 + 'px';
      condimento!.style.top = value * 0.55 + 'px';
      platoTorta!.style.top = value * 0.5 + 'px';
      frutosSecos!.style.left = value * 0.21 + 'px';
      chocoBarra!.style.right = value * 0.17 + 'px';
      platoGalletas!.style.bottom = value * 0.3 + 'px';
      lincoln!.style.bottom = value * 0.4 + 'px';
      cuchara!.style.bottom = value * 0.16 + 'px';
      sec!.style.bottom = value * 0.16 + 'px';
    });
  }
}
