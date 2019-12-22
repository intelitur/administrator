import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  OnDestroy
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Itinerary } from "src/app/itinerary/models/Itinerary";
import { Subscription } from "rxjs";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { GroupType } from 'src/app/itinerary/models/GroupType';

@Component({
  selector: "app-itinerary-form-dialog",
  templateUrl: "./itinerary-form-dialog.component.html",
  styleUrls: ["./itinerary-form-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryFormDialogComponent implements OnInit, OnDestroy {
  itineraryFG: FormGroup;
  categories: Array<string> = [
    "Vida Silvestre",
    "Termales",
    "Aventura",
    "Relajación"
  ];
  images = [];
  groupTypes: Array<GroupType>;
  private subscription: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ItineraryFormDialogComponent>,
    private _fb: FormBuilder,
    private _itinerary: ItineraryService,
    private _common: CommonService
  ) {}

  ngOnInit() {
    this.itineraryFG = this._fb.group({
      name: ["", Validators.required],
      pricePerDay: ["", Validators.required],
      totalPrice: ["", Validators.required],
      adultsQuantity: ["", Validators.required],
      childrenQuantity: ["", Validators.required],
      description: ["", Validators.required],
      duration: ["", Validators.required],
      groupType: ["", Validators.required],
      category: ["", Validators.required],
      travelAdvices: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      status: ["", Validators.required] // public or private
    });
    this.getGroupTypes();
  }

  getGroupTypes() {
    this.subscription = this._itinerary.getGroupTypes().subscribe({
      next: (data: any) => {
        this.groupTypes = [];
        data.data.forEach(el => {
          this.groupTypes.unshift(el);
        });
      },
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }

  catchSelectedImages(files: FileList) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.images.unshift(event.target.result);
      };
    }
  }

  onSubmit() {
    console.log(this.images);
    let fv = this.itineraryFG.value;
    /*this.subscription = */ this._itinerary.saveItinerary(
      new Itinerary({
        name: fv.name,
        total_price: fv.totalPrice,
        price_per_day: fv.pricePerDay,
        adult_number: fv.adultsQuantity,
        child_number: fv.childrenQuantity,
        description: fv.description,
        duration: fv.duration,
        active: false,
        public: fv.status,
        initial_date: fv.startDate,
        final_date: fv.endDate
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
