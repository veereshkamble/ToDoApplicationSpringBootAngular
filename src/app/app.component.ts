import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>{{title}}</h1> <br /> <p>{{message}}</p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  message = 'So this is a new message I just put in to see how it works'
}
