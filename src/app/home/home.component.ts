import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, Subject } from 'rxjs';
import { Marcas } from 'src/interfaces/recetas.interface';
import { Parallax } from 'swiper';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  marca: Marcas[] = [];
  load: boolean = true;

  constructor(
    private router: Router,
    private service: AppService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Home');
    this.marca = this.service
      .products()
      .marcas.filter(
        (f) =>
          f.nombre.toLowerCase().includes('oreo') ||
          f.nombre.toLowerCase().includes('lincoln')
      );
  }

  ngAfterViewInit(): void {
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
    let jarrito = document.getElementById('jarrito');
    let sec = document.getElementById('sec');

    window.addEventListener('scroll', function () {
      let value = this.window.scrollY;

      if (value <= 1700) {
        chocoBarra!.style.right = value * 0.1 + 'px';
      }

      if (value <= 1700) {
        jarrito!.style.top = value * 0.04 + 'px';
      }

      if (value < 1700) {
        condimento!.style.top = value * 0.08 + 'px';
      }

      if (value < 1700) {
        platoTorta!.style.top = value * 0.1 + 'px';
      }

      if (value < 1700) {
        frutosSecos!.style.left = value * 0.09 + 'px';
      }

      if (value < 1700) {
        platoGalletas!.style.bottom = value * 0.2 + 'px';
      }

      if (value < 1700) {
        cuchara!.style.bottom = value * 0.14 + 'px';
      }

      if (value < 1700) {
        oreo!.style.top = value * 0.1 + 'px';
      }

      if (value < 1700) {
        lincoln!.style.bottom = value * 0.17 + 'px';
      }

      if (value < 240) {
        sec!.style.marginBottom = value * 2.5 + 'px';
      }
    });
  }
}
