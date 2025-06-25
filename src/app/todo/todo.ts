import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
     tasks:string ='';
     
     // @output() is a output decorator [it is an eventemiter]
    @Output() taskAdded = new EventEmitter<string>;
     
    constructor(private taskService:Task){

    }

     onSubmit(){
      console.log(this.tasks);
     
      if(this.tasks =="") {
        alert("Please enter your task");
      }
      else
      {
           this.taskAdded.emit(this.tasks) // using emit we can send the data outside
     //sending the value using service
     this.tasks='';
      }
    
     }
}
