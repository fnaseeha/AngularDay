import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  user: User = new User();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  usersaveform = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(6)]),
    nic:new FormControl("",[Validators.required]),
    bloodGroup:new FormControl("",[Validators.required,Validators.minLength(2)]),
    dateOfBirth:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    userType:new FormControl("",[Validators.required]),
  });
  saveUser(saveUser){
    this.user = new User();
    //this.user.name = this.us
  }

}
