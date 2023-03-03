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

      if (value <= 240) {
        chocoBarra!.style.right = value * 0.6 + 'px';
      }

      if (value < 240) {
        condimento!.style.top = value * 0.4 + 'px';
      }

      if (value < 240) {
        platoTorta!.style.top = value * 0.65 + 'px';
      }

      if (value < 240) {
        frutosSecos!.style.left = value * 0.6 + 'px';
      }

      if (value < 240) {
        platoGalletas!.style.bottom = value * 1.1 + 'px';
      }

      if (value < 240) {
        cuchara!.style.bottom = value * 0.8 + 'px';
      }

      if (value < 240) {
        oreo!.style.top = value * 0.8 + 'px';
      }

      if (value < 240 ) {
        lincoln!.style.bottom = value * 1.2 + 'px';
      }

      if (value < 240 ) {
        sec!.style.bottom = value * 2.6 + 'px';
      }

    });
  }
}
