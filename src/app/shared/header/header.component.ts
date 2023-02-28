import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { AppService } from '../../services/app.service';
import { Marcas } from '../../interfaces/product.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marca: Marcas[] = []

  constructor(public dialog: MatDialog, private service: AppService) {}

  ngOnInit(): void {
    this.marca = this.service.products().producto
    console.log("🚀 ~ this.marca:", this.marca)
  }


  openMenu() {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass:'fullscreen-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
