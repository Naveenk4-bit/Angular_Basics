import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
 count = 0;

 increment() {
  this.count++;
 }
  dicrement() {
    if(this.count>0)
    {
      this.count--;
    }
    else {
      alert("Count reached  0")
    }

     
 }
 reset() {
  this.count = 0;
  
 }
}
