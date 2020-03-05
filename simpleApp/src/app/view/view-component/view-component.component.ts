import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})

export class ViewComponentComponent implements OnInit {

  UserName:string = "";
  response:any;
  followers:any =[];
  followerRespons:any;
  followerUrl:string;


  constructor(private http:HttpClient) {
   }

  ngOnInit(): void {
  }
  search(){
     this.http.get('https://api.github.com/users/'+this.UserName)
    .subscribe((res)=>{
      this.response = res;
      this.http.get(this.response.followers_url).subscribe((r)=>{
        this.followerRespons = r;
        this.followers = [];
        this.followerRespons.forEach(element => {
        this.followers.push(element.login);
        });
      })
    });
  }

}
