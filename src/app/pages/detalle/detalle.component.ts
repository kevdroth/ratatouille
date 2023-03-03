import {
  Component,
  HostListener,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleService } from './service/detalle.service';
import { map, take, tap } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Marcas } from '../../interfaces/recetas.interface';

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
  marca!: Marcas[]

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AppService
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
          console.log('🚀 ~ producto:', this.producto);
          this.load = true;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log('llegue')
        },
      });
  }

}
