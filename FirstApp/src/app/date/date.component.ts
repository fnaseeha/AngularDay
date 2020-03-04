import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage:string;
  someNumber=10;
  constructor() {
    setInterval(()=>{

      this.someNumber++; 
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    },1000)
    
   }

  ngOnInit(): void {
  }

  addTwoNumbers(a:number,b:number){
    return a+b;
  }
}
