import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Itinerary } from "src/app/itinerary/models/Itinerary";

@Component({
  selector: "app-itinerary-form-dialog",
  templateUrl: "./itinerary-form-dialog.component.html",
  styleUrls: ["./itinerary-form-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryFormDialogComponent implements OnInit {
  itineraryFG: FormGroup;
  categories: Array<string> = [
    "Vida Silvestre",
    "Termales",
    "Aventura",
    "Relajación"
  ];
  images = [];
  groupTypes: Array<string> = ["Amigos", "Sólo", "Familiar", "Pareja"];
  constructor(
    public dialogRef: MatDialogRef<ItineraryFormDialogComponent>,
    private _fb: FormBuilder
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
    console.log(
      new Itinerary(
        fv.name,
        fv.totalPrice,
        fv.adultsQuantity,
        fv.childrenQuantity,
        fv.description,
        fv.duration,
        false,
        Boolean(fv.status),
        new Date(fv.startDate),
        new Date(fv.endDate)
      )
    );
    //console.log(new Itinerary(formValue));
  }
}
