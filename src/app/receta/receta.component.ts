import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, take, delay } from 'rxjs';
import { RecetaService } from './service/receta.service';
import { Title } from '@angular/platform-browser';
import SwiperCore, { Autoplay, FreeMode } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode]);

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta!: any;
  load: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private router: Router,
    private titleService: Title
  ) {}

  config: any = {
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    speed: 2000,
    spaceBetween: 1,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    centerInsufficientSlides: true
  };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(({ idReceta }) => {
          return idReceta;
        }),
        take(1)
      )
      .subscribe({
        next: (value) => {
          this.receta = this.recetaService.getReceta(value);
          this.recetaService
            .getReceta(value)
            .map((f) => f.titulo)
            .map((m) => {
              let titulo =
                m.text1 + ' ' + m.marca1 + ' ' + m.text2 + ' ' + m.marca2;
              this.titleService.setTitle(titulo);
              this.config.slidesPerView = this.receta[0].imagenes.producto.length > 2 ? 2 : 1
              this.config.loop = this.receta[0].imagenes.producto.length > 1 ? true : false
            });
        },
        error: (err) => console.log(err),
        complete: () => {
          this.load = true;
        },
      });
  }

  back() {
    window.history.back();
  }

}
