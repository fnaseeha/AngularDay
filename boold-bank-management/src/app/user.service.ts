import { User } from './service/http-client.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:1993/";

  constructor(private http:HttpClient) { }

  getUserList():Observable<any>{
    return this.http.get<User>(`${this.baseUrl}`+'userGet');
  }
  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/userSaveOrUpdate',user);
  }

  deleteUser(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/userDelete/${id}`,{responseType:'text'});
  }

  getUser(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/userProfile/${id}`);
  }

}
