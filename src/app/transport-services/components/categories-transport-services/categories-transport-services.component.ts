import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { TransportServicesCategoriesService } from "../../services/transport-services-categories.service";
import { CreateCategoriesTransportServicesComponent } from "../create-categories-transport-services/create-categories-transport-services.component";

@Component({
  selector: "app-categories-transport-services",
  templateUrl: "./categories-transport-services.component.html",
  styleUrls: ["./categories-transport-services.component.scss"],
})
export class CategoriesTransportServicesComponent implements OnInit {
  filter: any = {
    name: "",
  };
  subscription: Subscription;

  constructor(
    public categoryTransportService: TransportServicesCategoriesService,
    private matDialog: MatDialog,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.subscription = this.categoryTransportService
      .getTransportServicesCategories()
      .subscribe({
        next: (data: any) => {
          this.categoryTransportService.categories = data;
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }

  openCreateialog() {
    this.matDialog.open(CreateCategoriesTransportServicesComponent, {
      height: "45%",
      width: "45%",
      minWidth: "280px",
      disableClose: true,
    });
  }

  changeState(category: any) {
    if(category.is_active){
      this.categoryTransportService
      .deleteTransportCategory(category.id)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.commonService.openSnackBar(
              `La categoría se ha eliminado ${category.name}`,
              "OK"
            );
            category.is_active = false;
            this.getCategories();
          } else {
            this.commonService.openSnackBar(
              "Error. No se puedo eliminar la categoría",
              "OK"
            );
          }
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
    }  
  }
}
