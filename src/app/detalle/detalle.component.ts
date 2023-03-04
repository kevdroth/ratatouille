import {
  Component,
  HostListener,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { Marcas } from 'src/interfaces/recetas.interface';
import { DetalleService } from './service/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  producto!: any;
  marcaTitulo!: string;
  ig!: string;
  windowScrolled = false;
  load: boolean = false;
  marca!: Marcas[];
  value: boolean = false

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.loadScrollBtn();
      this.loadDetalle();
  }

  ngOnDestroy(): void {}

  loadScrollBtn() {
    window.addEventListener('scroll', () => {
      
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  loadDetalle() {
    this.activatedRoute.params
      .pipe(map(({ titulo }) => (this.marcaTitulo = titulo)))
      .subscribe({
        next: (titulo) => {
          this.producto = this.detalleService.getProductos(titulo);
          this.load = true;

        },
        error: (err) => {
        },
        complete: () => {
        },
      });
  }
}
