import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ratatouille';

  constructor(){
    Aos.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 0,
    });
  }
}
