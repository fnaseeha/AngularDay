import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = "Loading...";

  constructor(private user:UserService) { }

  ngOnInit() {
    // this.user.getSomeData().subscribe(data=>{
    //   this.message = data.message;
    //   if(!data.success){
    //     localStorage.removeItem('loggedIn');
    //   }
    // })
  }

}
