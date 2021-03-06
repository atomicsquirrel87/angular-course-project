import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="onClick()"></div>
  `,
  styles: [`
    div {
      width: 100px;
      height: 100px;
      background-color: gold;
    }
  `]
})
export class EventBindingComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  onClick() {
    this.clicked.emit('New text');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
