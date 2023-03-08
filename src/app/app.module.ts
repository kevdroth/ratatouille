import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedModule,
    QuicklinkModule
  ],
  exports: [SharedModule, QuicklinkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
