import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public nic:string,
    public name:string,
    public bloodGroup:string,
    public dateOfBirth:string,
    public email:string,
    public password:string,
    public userType:string,
  ){}
}

interface myData{
  nic:string,
    name:string,
    bloodGroup:string,
    dateOfBirth:string,
    email:string,
    password:string,
    userType:string,
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  constructor(private httpClient: HttpClient) { }
  getUsers() {
    console.log("test");
    return this.httpClient.get<myData>('http://localhost:1993/userGet');
  }
}
