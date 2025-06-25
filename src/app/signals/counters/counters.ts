import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counters',
  imports: [],
  templateUrl: './counters.html',
  styleUrl: './counters.css'
})
export class Counters {
   count = signal(0);
   doubleCount:Signal<number> = computed(() => this.count()*2);

   increment(){
     this.count.set(this.count()+1)
   }
}
