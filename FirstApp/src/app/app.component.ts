import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myuser:User;
  new_myuser:User;
  constructor(){
    this.myuser= new User();
    this.myuser.name = "Nasee";
    this.myuser.designation = "Software Engineer";
    this.myuser.address="Feisel Avenue, Colombo";
    this.myuser.phone=['777-333-444','812-333-455'];

    this.new_myuser= new User();
    this.new_myuser.name = "NaseeHasee";
    this.new_myuser.designation = "Mobile Developer";
    this.new_myuser.address="Reid Avenue, Colombo";
  }

}
