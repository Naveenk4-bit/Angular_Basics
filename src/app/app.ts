import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Counters } from './signals/counters/counters';
import { CommonModule } from '@angular/common';
import { Profile } from './profile/profile';
import { Demo } from './demo/demo';
import { Form } from './form/form';
import { List } from './list/list';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Counter, Counters, CommonModule, Profile, Demo, Form, List, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // using two way binding
  fullname = "";
  //safe binding usage here
  user:any = null;
  // A method for One way binding
  getName() {
    return "My First Angular Page";
  }
  //Image showing example using string Interpolitation
  imageUrl ="https://picsum.photos/200/300";
  imageUrl2 = "https://picsum.photos/seed/picsum/200/300";
  imageUrl3 = "https://picsum.photos/200/300?grayscale";
  imageUrl4 = "https://picsum.photos/id/870/200/300?https://picsum.photos/200/300/?blur&blur=2";
  //Event Binding
  clickCount = 0;

  clickMe() {
    this.clickCount++;
  }

  movies = ['Superman', 'Batman', 'Spiderman', 'x-man']
  colors = ['blue','Green','blue','Green']

  turnon = false;
  //date pipes example
  toDate = new Date();
  //slice pipe 
  myname = "Naveen Antony Raj M";
  items = ['Java', 'Python', 'C#','Angular']; // Slice with array example
  //uper & lower case pipes
  word = "Welcome To C#";
  //Currency pipes
  price = 10566

  taskNames:string[] = [];

  //getting the data from todo component
  onTaskAdded(taskName:string){
    console.log(taskName, 'From App');
    this.taskNames.push(taskName);
  }

}
