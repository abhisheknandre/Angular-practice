import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-list';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "Time table"
    // }, 2000);
  }
}
