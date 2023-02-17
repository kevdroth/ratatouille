import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { RecetaService } from './service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta!: any[];
  ingredientes!: any[];

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
      .subscribe((value) => {
        this.receta = this.recetaService.getReceta(value);
        console.log('🚀 ~ receta', this.receta);
      });
  }

  home() {
    this.router.navigateByUrl('home');
  }

  ngOnDestroy(): void {}
}
