import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CategoryService} from 'src/app/Services/catagory.service';
import{Category} from 'src/app/Models/Category';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cat-new-form',
  templateUrl: './cat-new-form.component.html',
  styleUrls: ['./cat-new-form.component.css']
})
export class CatNewFormComponent implements OnInit {
  cat: CategoryService;
  constructor(
    category: CategoryService,
    private router:Router,
    private route:ActivatedRoute
    ) {
       this.cat=category;
      }

  ngOnInit() { }
  //@Output() addNewCat = new EventEmitter();
  name: string = "";
  status: boolean;

  onSubmitClickCat(){
    this.cat.catname.push(
    new Category(this.name,this.status)
   );
  }
  // onCancleOfForm(){
  // this.router.navigate(['category'],{relativeTo:this.route})
  // }
  onClickClear(){
    this.name='';
  }
}
