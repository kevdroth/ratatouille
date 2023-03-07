import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, Subscription, take } from 'rxjs';
import { Data, Recetas } from 'src/interfaces/recetas.interface';
import { RecetaService } from './service/receta.service';
import { Title } from '@angular/platform-browser';
import SwiperCore, { Swiper, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta: any;
  load: boolean = false;
  private routeSub$!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private router: Router,
    private titleService: Title
  ) {}

  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });

  ngOnInit(): void {
    this.routeSub$ = this.activatedRoute.params
      .pipe(
        map(({ idReceta }) => {
          return idReceta;
        }),
        take(1)
      )
      .subscribe({
        next: (value) => {
          this.receta = this.recetaService.getReceta(value);
          console.log("🚀 ~ this.receta:", this.receta)

          this.recetaService
            .getReceta(value)
            .map((f) => f.titulo)
            .map((m) => {
              let titulo =
                m.text1 + ' ' + m.marca1 + ' ' + m.text2 + ' ' + m.marca2;
              this.titleService.setTitle(titulo);
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

  ngOnDestroy(): void {
    this.routeSub$.unsubscribe();
    console.log('rompi');
  }
}
