import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'app works!';
  constructor(){
    console.log('hello');
  }

  elementEntered(){
    console.log('element has appeared');
  }

  elementLeft(){
    console.log('element has left');
  }
}
