import {
  Component,
  HostListener,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleService } from './service/detalle.service';
import { map, tap } from 'rxjs';

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
        next: (tituloMarca) => {
          this.producto = this.detalleService.getProductos(tituloMarca),
            console.log('🚀 ~ producto:', this.producto);
          this.load = true;
        },
        error: (err) => console.log(err),
        complete: () => console.log('complete')
      });
    this.setIg();
  }

  setIg() {
    switch (this.marcaTitulo) {
      case 'Oreo':
        this.ig = 'https://www.instagram.com/recetoreo/?hl=es-la';
        break;
      case 'Milka':
        this.ig = 'https://www.instagram.com/milka_argentina/';
        break;
      default:
        this.ig = '';
        break;
    }
  }
}
