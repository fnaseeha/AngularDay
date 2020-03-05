import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  routes=[
    {linkName:'Home',url:'home'},
    {linkName:'Setting',url:'setting'},
    {linkName:'Hello',url:'hello'},
  ]
}
