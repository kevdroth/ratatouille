import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { environment } from 'src/environment/environment.prod';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _googleAnalyticsId: string = environment.googleAnalyticsId;

  constructor(private router: Router, private titleService: Title) {
    Aos.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 0,
    });

  }
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', this._googleAnalyticsId, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
    // this.router.events.subscribe((event) => {
    //   if (!(event instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    //   this.titleService.setTitle('Galletitea');
    // });
  }
}
