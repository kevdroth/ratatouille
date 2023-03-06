import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Data, Recetas } from 'src/interfaces/recetas.interface';
import { RecetaService } from './service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta: any;
  // ingredientes!: any[];
  load: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private router: Router
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

          this.load = true;
        },
        error: (err) => console.log(err),
        complete: () => {
          console.log('aca')
        }
      });
  }

  back() {
    window.history.back();
  }

  ngOnDestroy(): void {}
}
