import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs';
import { Data, Recetas } from 'src/interfaces/recetas.interface';
import { RecetaService } from './service/receta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta: any;
  load: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(({ idReceta }) => {
          return idReceta;
        })
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
            });
          this.load = true;
        },

        error: (err) => console.log(err),
        complete: () => {
          console.log('aca');
        },
      });
  }

  back() {
    window.history.back();
  }

  ngOnDestroy(): void {}
}
