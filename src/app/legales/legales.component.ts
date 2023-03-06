import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legales',
  templateUrl: './legales.component.html',
  styleUrls: ['./legales.component.scss']
})
export class LegalesComponent implements OnInit{

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('Legales');
  }

}
