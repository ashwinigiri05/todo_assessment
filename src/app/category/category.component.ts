import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from '../Services/catagory.service';
import { Category } from '../Models/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
  })
export class CategoryComponent implements OnInit {
 catname;
 cname:Category;
 index:number;
 constructor(category: CategoryService){
    this.catname=category.catname;
  }
  
  catEditForm=false;
  ngOnInit() { }
}
