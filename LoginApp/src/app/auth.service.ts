import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')||'false');

  constructor(private http:HttpClient) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn','true');
  }
  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')||this.loggedInStatus.toString())
  }

  getUserDetails(username,password){
    //post details to API server
    //return this.http.post("url",{
     // username,password
  //  }).subscribe(data=>console.log(data))
  }
}
