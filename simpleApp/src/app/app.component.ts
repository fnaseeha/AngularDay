import { MyServiceService } from './my-service.service';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //injecting
  constructor(private mys:MyServiceService, private http:HttpClient){
    this.mys.printToConsole('got the service');
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/fnaseeha');
    obs.subscribe((res)=>console.log(res));

  }

}
