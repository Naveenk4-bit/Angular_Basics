import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task {

  constructor() { }
 
  private taskNamesSubject = new BehaviorSubject<string[]>([]);
  taskNames$ = this.taskNamesSubject.asObservable();
  
  addTask(task: string){

  }
}
