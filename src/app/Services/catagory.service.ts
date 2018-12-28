import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';
@Injectable({
  providedIn: 'root'
})
export class  CategoryService {
  catname = [
    new Category( 'CDAC',false),
    new Category( 'Trainer',false),
    new Category( 'Employee',true)
  ];
  constructor() {  }
}
