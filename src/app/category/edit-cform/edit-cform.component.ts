import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { CategoryService } from 'src/app/Services/catagory.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-cform',
  templateUrl: './edit-cform.component.html',
  styleUrls: ['./edit-cform.component.css']
})
export class EditCformComponent implements OnInit {
  id;
  paramSubscription;
  @ViewChild('category') category:ElementRef;

  constructor(
        public cats:CategoryService,
        private router:Router,
        private route: ActivatedRoute
  ){ }

  ngOnInit() { this.id = this.route.snapshot.params['id'];

  this.paramSubscription = this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
      }
    );
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
  onSubmitOfEdit(name :HTMLInputElement,status:HTMLInputElement){
    this.cats.catname[this.id].name = this.category.nativeElement.value;
    this.cats.catname[this.id].status = status.checked
    //this.cats.catname.push( new Category('cname'));
    // this.showCatList.emit();
  }
  onClearClick(){
     this.cats.catname[this.id].name = '';
     this.cats.catname[this.id].status=false;
     // this.categor[this.id].category='';
     // this.toDoService.tasks[this.id].status=false;
  }
  onCancleOfEdit(){
    this.router.navigate(['/category'],{relativeTo:this.route})
    // this.cname.name=cn;
    // this.showCatList.emit();
  }
}
