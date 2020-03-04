import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any;
  @Input('user') userObj:User;
  isCollapsed: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
    this.user = {
      name:this.userObj.name,
      designation:this.userObj.designation,
      address:this.userObj.address,
      phone:this.userObj.phone
    }
  }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

}
