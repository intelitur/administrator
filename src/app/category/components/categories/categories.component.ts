import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/general-services/common.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { CategoryService } from '../../services/category.service';
import { CategoryCreateComponent } from '../category-create/category-create.component';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Category } from '../../models/Category';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public commonService: CommonService,
    public dialogService: MatDialog,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.subscription = this.categoryService.getAllCategories()
      .subscribe({
        next: (data: any) => {
          this.categoryService.categories = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }


  openCreateCategoryDialog(action: boolean){
    this.dialogService.open(CategoryCreateComponent, {width: "60%", minWidth: "280px", data: action});
  }

  changeState(category: Category, {source}: any){

    var id = {
      category_id: category.category_id
    }
    this.categoryService
      .changeStateCategory(id)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            category.is_active = !category.is_active;
            source.checked = category.is_active
            if (category.is_active)
              this.commonService.openSnackBar(
                `La categoría ${category.name} ha sido activada`,
                "OK"
              );
            else
              this.commonService.openSnackBar(
                `La categoría ${category.name} ha sido desactivada`,
                "OK"
              );
          } else {
            this.commonService.openSnackBar(
              `Error al cambiar el estado: ${data.error}`,
              "OK"
            );
          }
        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
          source.checked = category.is_active
        }
      });
  }

  openShowFilterOptionsDialog(){
    const  dialog = this.dialogService.open(CategoryFiltersComponent, {width: "50", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data => {
      console.log(data)
    })
  }
}
