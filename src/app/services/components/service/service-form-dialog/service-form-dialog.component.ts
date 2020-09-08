import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Itinerary } from "src/app/itinerary/models/Itinerary";
import { Subscription } from "rxjs";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { ServiceService } from "src/app/services/services/service.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { GroupType } from "src/app/itinerary/models/GroupType";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Category } from "src/app/services/models/Category";
import { Service } from "src/app/services/models/Service";
import { ImageService } from "src/app/itinerary/services/image.service";
import { FileUploader } from "ng2-file-upload";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-service-form-dialog",
  templateUrl: "./service-form-dialog.component.html",
  styleUrls: ["./service-form-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ServiceFormDialogComponent implements OnInit, OnDestroy {
  serviceFG: FormGroup;
  categories: Array<Category>;
  linkedCategories: Array<Category> = [];
  images: Array<File> = [];
  data = {
    local: true,
    images: []
  };
  groupTypes: Array<GroupType>;
  private subscription: Subscription;
  savedIt: number;
  savedImagePaths: Array<string> = [];
  constructor(
    public dialogRef: MatDialogRef<ServiceFormDialogComponent>,
    private _fb: FormBuilder,
    private _service: ServiceService,
    private _itinerary: ItineraryService,
    private _common: CommonService,
    private _image: ImageService
  ) {}

  ngOnInit() {
    this.serviceFG = this._fb.group({
      name: ["", Validators.required],
      category: ["", Validators.required]
    });
    this.getCategories();
  }

  /**
   * @function link category
   */
  linkCategory(c: Category) {
    if (!this.linkedCategories.includes(c)) this.linkedCategories.unshift(c);
  }


  
  change(){
    if(this.serviceFG.get('name').value == "" || this.serviceFG.get('category').value == ""){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * @function get categories
   */
  getCategories() {
    this.subscription = this._service.getCategories(4).subscribe({
      next: (result: ResponseInterface) => {
        console.log(result);
        let temp:any = result
        this.categories = temp;
      },
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }


  onSubmit() {
    this.subscription = this._service
      .addService(new Service(
        this.serviceFG.get('name').value,
       this.serviceFG.get('category').value
      )
    ).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Servicio creado", "Ok");
          this.onNoClick();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
  onNoClick(){
    this.dialogRef.close()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
