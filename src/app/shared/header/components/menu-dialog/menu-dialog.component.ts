import { Component, OnInit } from '@angular/core';
import { Marcas } from 'src/app/interfaces/product.interface';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
})
export class MenuDialogComponent implements OnInit {
  marca: Marcas[] = [];
  showMarcas: boolean = false;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.marca = this.service.products().producto;
  }

}
