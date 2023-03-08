import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, take } from 'rxjs';
import { RecetaService } from './service/receta.service';
import { Title } from '@angular/platform-browser';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

  config: any = {
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    spaceBetween: 8,
    pagination: false,
    navigation: false,
    scrollbar: false,
    autoplay: {
      delay: 1
    }
  };

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
