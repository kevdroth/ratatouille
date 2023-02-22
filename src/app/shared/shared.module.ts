import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
