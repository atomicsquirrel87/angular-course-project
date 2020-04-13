import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      {{ name }}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
