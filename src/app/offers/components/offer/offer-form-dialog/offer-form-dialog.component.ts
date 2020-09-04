import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Itinerary } from "src/app/itinerary/models/Itinerary";
import { Subscription } from "rxjs";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { GroupType } from "src/app/itinerary/models/GroupType";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Category } from "src/app/itinerary/models/Category";
import { ImageService } from "src/app/itinerary/services/image.service";
import { FileUploader } from "ng2-file-upload";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-offer-form-dialog",
  templateUrl: "./itinerary-form-dialog.component.html",
  styleUrls: ["./itinerary-form-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferFormDialogComponent implements OnInit, OnDestroy {
  itineraryFG: FormGroup;
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
    public dialogRef: MatDialogRef<OfferFormDialogComponent>,
    private _fb: FormBuilder,
    private _itinerary: ItineraryService,
    private _common: CommonService,
    private _image: ImageService
  ) {}

  ngOnInit() {
    this.setupUploader();
    this.itineraryFG = this._fb.group({
      name: ["", Validators.required],
      pricePerDay: ["", Validators.required],
      totalPrice: [{ value: "", disabled: true }, Validators.required],
      adultsQuantity: ["", Validators.required],
      childrenQuantity: ["", Validators.required],
      description: ["", Validators.required],
      duration: ["", Validators.required],
      groupType: ["", Validators.required],
      category: ["", Validators.required],
      travelAdvices: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: [{ value: "", disabled: true }, Validators.required],
      status: ["", Validators.required] // public or private
    });
    this.setupValueChangesTotalPrice();
    this.getGroupTypes();
    this.getCategories();
    this.setupEndDate();
  }

  /**
   * @function setud end date
   */
  setupEndDate() {
    this.itineraryFG.get("startDate").valueChanges.subscribe(val => {
      if (this.itineraryFG.get("startDate").value) {
        var date = new Date(val);
        if(this.itineraryFG.get("duration").value) {
          date.setDate(date.getDate() + this.itineraryFG.get("duration").value);
          this.itineraryFG.get('endDate').setValue(date);
        }
      }
    });
  }

  /**
   * @function setup changes of total price
   */
  setupValueChangesTotalPrice() {
    this.itineraryFG.get("pricePerDay").valueChanges.subscribe(val => {
      if (this.itineraryFG.get("duration").value) {
        let duration = this.itineraryFG.get("duration").value;
        this.itineraryFG.controls["totalPrice"].setValue(val * duration);
      }
    });

    this.itineraryFG.get("duration").valueChanges.subscribe(val => {
      if (this.itineraryFG.get("pricePerDay").value) {
        let pricePerDay = this.itineraryFG.get("pricePerDay").value;
        this.itineraryFG.controls["totalPrice"].setValue(val * pricePerDay);
      }
    });
  }

  /**
   * @function setup up loader
   */
  setupUploader() {
    this._image.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this._image.uploader.onSuccessItem = (item, response, status, headers) => {
      let path = JSON.parse(response).data;
      this.savedImagePaths.push(path);
    };
    this._image.uploader.onCompleteAll = () => {
      this.savedImagePaths.forEach(e => {
        this.subscription = this._itinerary
          .saveImageUrl(this.savedIt, e)
          .subscribe({
            error: (err: HttpErrorResponse) => this._common.handleError(err)
          });
      });
    };
  }

  /**
   * @function link category
   */
  linkCategory(c: Category) {
    if (!this.linkedCategories.includes(c)) this.linkedCategories.unshift(c);
  }

  /**
   * @function delete linked category
   */
  deleteLinkedCategory(index: number) {
    this.linkedCategories.splice(index, 1);
  }

  /**
   * @function get group types
   */
  getGroupTypes() {
    this.subscription = this._itinerary.getGroupTypes().subscribe({
      next: (data: any) => {
        this.groupTypes = [];
        data.data.forEach((el: GroupType) => {
          this.groupTypes.unshift(el);
        });
      },
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }

  /**
   * @function get categories
   */
  getCategories() {
    this.subscription = this._itinerary.getCategories().subscribe({
      next: (result: ResponseInterface) => {
        this.categories = result.data;
      },
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }

  /**
   * @function catch selected images
   */
  catchSelectedImages(files: any) {
    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(files[i].rawFile);
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.images.push(event.target.result);
        this.data.images = this.images;
      };
    }
  }

  /**
   * @function catch deleted image
   */
  catchDeletedImage(index: number) {
    this._image.uploader.removeFromQueue(this._image.uploader.queue[index]);
  }

  onSubmit() {
    let fv = this.itineraryFG.value;
    this.subscription = this._itinerary
      .saveItinerary(
        new Itinerary(
          {
            name: fv.name,
            total_price: this.itineraryFG.get('totalPrice').value,
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
