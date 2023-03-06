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
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  producto!: any;
  windowScrolled = false;
  load: boolean = false;
  value: boolean = false;

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
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
    this.activatedRoute.params.pipe(map(({ titulo }) => titulo)).subscribe({
      next: (titulo) => {
        this.titleService.setTitle(`Recetas ${titulo}`);
        this.producto = this.detalleService.getProductos(titulo);
      },
      error: (err) => {},
      complete: () => {
        console.log('aca');
      },
    });
    setInterval(() => {
      this.load = true;
    }, 1000);
  }
}
