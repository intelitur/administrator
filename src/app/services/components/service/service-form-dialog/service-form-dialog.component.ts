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



  /**
   * @function catch deleted image
   */
  catchDeletedImage(index: number) {
    this._image.uploader.removeFromQueue(this._image.uploader.queue[index]);
  }

  onSubmit() {
    let fv = this.serviceFG.value;
    this.subscription = this._itinerary
      .saveItinerary(
        new Itinerary(
          {
            name: fv.name,
            total_price: this.serviceFG.get('totalPrice').value,
            price_per_day: fv.pricePerDay,
            adult_number: fv.adultsQuantity,
            child_number: fv.childrenQuantity,
            description: fv.description,
            duration: fv.duration,
            active: false,
            public: fv.status,
            initial_date: fv.startDate,
            final_date: fv.endDate
          },
          fv.groupType
        ),
        this.linkedCategories.map(e => e.category_id)
      )
      .subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Itinerario guardado con éxito", "Ok");
          this.savedIt = result.data;
          this.uploadImages();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  /**
   * @function upload images
   */
  uploadImages() {
    this._image.uploader.uploadAll();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
