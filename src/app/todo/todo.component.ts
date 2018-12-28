import { Component, OnInit } from '@angular/core';
import {ToDoService} from 'src/app/Services/to-do.service';
import {ToDo} from 'src/app/Models/ToDo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[ToDoService]
})
export class TodoComponent implements OnInit {
  tasks;
  task: ToDo;
  index: number;
 
  constructor(toDoService: ToDoService) {
      this.tasks = toDoService.tasks;
  }

  ngOnInit() { }

}
