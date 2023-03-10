import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { AppService } from '../../services/app.service';
import { Marcas } from '../../../interfaces/recetas.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  marcaPrincipal: Marcas[] = [];

  constructor(public dialog: MatDialog, private service: AppService) {}

  ngOnInit(): void {
    this.marcaPrincipal = this.service
      .products()
      .marcas.filter(
        (f) =>
          f.nombre.toLowerCase().includes('oreo') ||
          f.nombre.toLowerCase().includes('lincoln')
      );
  }  

  openMenu() {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'fullscreen-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
