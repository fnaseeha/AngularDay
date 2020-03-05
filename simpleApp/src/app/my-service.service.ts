import { Injectable } from '@angular/core';

@Injectable({ //this is a service
  providedIn: 'root'
})
export class MyServiceService {

  printToConsole(arg){
    console.log(arg);
  }
}
