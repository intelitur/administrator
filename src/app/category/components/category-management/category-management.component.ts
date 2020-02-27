import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../models/Category';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/general-services/auth.service';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit, OnDestroy {

  categorySubscription: Subscription
  category_id: Number;
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    public _auth: AuthService
  ) { }

  ngOnInit() {
    this.categorySubscription = this.route.paramMap.subscribe((params) => {
      this.category_id = Number(params.get("category_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.categorySubscription.unsubscribe();
  }

  recharge(){
    this.categoryService.getCategory(Number(this.category_id)).subscribe((data: any) => {
      this.category = <Category> data;
    })
  }
}
