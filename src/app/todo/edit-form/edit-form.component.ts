import { Component, OnInit, OnDestroy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ToDoService } from 'src/app/Services/to-do.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  id;
  paramSubscription;
  @ViewChild('category') category: ElementRef;

  constructor(
    public toDoService: ToDoService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
  onSubmitOfEdit(
    name:HTMLInputElement,
    status:HTMLInputElement
   ) {  
        this.toDoService.tasks[this.id].name = name.value;
        this.toDoService.tasks[this.id].category = this.category.nativeElement.value;
        this.toDoService.tasks[this.id].status = status.checked
  }
  onCancleOfEdit() {
        this.router.navigate(['todo'],{relativeTo:this.route})
  }
  onClearClick() {
      this.toDoService.tasks[this.id].name='';
      this.toDoService.tasks[this.id].category='';
      this.toDoService.tasks[this.id].status=false;
  }
}
