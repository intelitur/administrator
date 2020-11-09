import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/general-services/common.service";
import { CategoryService } from "../../services/category.service";
import { CategoryCreateComponent } from "../category-create/category-create.component";
import { CategoryFiltersComponent } from "./category-filters/category-filters.component";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { Category } from "../../models/Category";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  filter: any = {
    name: "",
  };
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public commonService: CommonService,
    public dialogService: MatDialog,
    public categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.obtainAllCategories();
  }

  /**
   * @function to open the create category dialog
   */
  openCreateCategoryDialog() {
    this.dialogService.open(CategoryCreateComponent, {
      width: "60%",
      minWidth: "280px",
      disableClose: true,
    });
  }

  /**
   * @function to change the status of the category from active to inactive and vice versa
   * @param category to obtain the category's id
   * @param param1 to change the toggle
   */
  changeState(category: Category, { source }: any) {
    this.commonService
      .confirmationDialog(`¿Desea eliminar la categoría: ${category.name}?`)
      .then(async (result) => {
        if (result) {
          this.categoryService
            .changeStateCategory(category.category_id)
            .subscribe({
              next: (data: any) => {
                if (data.status == 204) {
                  category.is_active = !category.is_active;
                  source.checked = category.is_active;
                  this.commonService.openSnackBar(
                    `La categoría ${category.name} ha sido eliminada`,
                    "OK"
                  );
                  this.obtainAllCategories();
                } else {
                  this.commonService.openSnackBar(
                    `Error al cambiar el estado: ${data.error}`,
                    "OK"
                  );
                }
              },
              error: (err: HttpErrorResponse) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = category.is_active;
              },
            });
        } else {
          source.checked = category.is_active;
        }
      });
  }

  /**
   * @function to show the fiters option dialog
   */
  openShowFilterOptionsDialog() {
    const dialog = this.dialogService.open(CategoryFiltersComponent, {
      width: "50",
      minWidth: "280px",
      disableClose: true,
    });

    dialog.afterClosed().subscribe((type_id) => {
      if (type_id != undefined) {
        this.isFilters = true;
        this.subscription = this.categoryService
          .getAllCategories(type_id)
          .subscribe({
            next: (data: any) => {
              this.categoryService.categories = data;
              this.subscription.unsubscribe();
            },
            error: (err: HttpErrorResponse) =>
              this.commonService.openSnackBar(`Error: ${err}`, "OK"),
          });
      }
    });
  }

  /**
   * @function to get categories without filters
   */
  obtainAllCategories() {
    this.isFilters = false;
    this.subscription = this.categoryService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categoryService.categories = data;
        this.subscription.unsubscribe();
      },
      error: (err: HttpErrorResponse) =>
        this.commonService.openSnackBar(`Error: ${err}`, "OK"),
    });
  }
}
