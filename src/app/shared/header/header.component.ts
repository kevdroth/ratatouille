import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showFiller = new EventEmitter();

  toggle: boolean = false

  ngOnInit(): void {
  }

  openMenu(){
    this.toggle = !this.toggle
    this.showFiller.emit(this.toggle)
  }
}
