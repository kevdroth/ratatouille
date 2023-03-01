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
    // this.parallax();
  }

  // parallax() {
  //   let text = document.getElementById('text');
  //   let stars = document.getElementById('stars');
  //   let moon = document.getElementById('moon');
  //   let mountains_behind = document.getElementById('mountains_behind');
  //   let btn = document.getElementById('btn');
  //   let mountains_front = document.getElementById('mountains_front');

  //   window.addEventListener('scroll', function () {
  //     var value = this.window.scrollY;
  //     stars!.style.left = value * 0.25 + 'px';
  //     moon!.style.top = value * 1.05 + 'px';
  //     mountains_behind!.style.top = value * 0.5 + 'px';
  //     mountains_front!.style.top = value * 0 + 'px';
  //     text!.style.marginRight = value * 4 + 'px';
  //     text!.style.marginTop = value * 1.5 + 'px';
  //     btn!.style.left = value * 1.5 + 'px';
  //   });
  // }
}
