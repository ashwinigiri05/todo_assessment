import { Component, OnInit } from '@angular/core';
import {ToDoService} from 'src/app/Services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos;
  name: string = "";
  ccategory: string = "";
  cstatus: boolean ;

  constructor(
    toDoService: ToDoService,
    private router:Router,
    private route:ActivatedRoute
    ) {
       this.todos = toDoService.tasks;
      }

  ngOnInit() { }

  onNewButtonClick() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  onEditClicked(index) {
    this.router.navigate(['/todo','edit',index]);
  }
  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
  }
}

  


