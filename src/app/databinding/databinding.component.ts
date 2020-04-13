import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  aString = 'I´m a string';
  aNumber = 100;
  aBoolean = true;
  attachClass = false;
  constructor() {
    setTimeout(() => {
      this.aNumber += 200;
      this.attachClass = true;
    }, 3000)
   }

   onclick(event: Event) {
    console.log("Clicked"); 
    console.log(event);
   }

  ngOnInit(): void {
  }

}
