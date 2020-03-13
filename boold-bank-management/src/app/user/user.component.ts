import { HttpClientService } from "../service/http-client.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  users:{
    nic:string,
    name:string,
    bloodGroup:string,
    dateOfBirth:string,
    email:string,
    password:string,
    userType:string,
  }


  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsers()
    .subscribe(response=>
      this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response){
    this.users = response;
    console.log(response);
  }
}
