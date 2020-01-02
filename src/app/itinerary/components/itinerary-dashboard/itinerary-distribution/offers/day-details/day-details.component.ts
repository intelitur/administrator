import {
  Component,
  OnInit,
  Inject,
  Optional,
  ViewEncapsulation
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-day-details",
  templateUrl: "./day-details.component.html",
  styleUrls: ["./day-details.component.scss"]
})
export class DayDetailsComponent implements OnInit {
  subscription: Subscription;
  constructor(
    @Optional() public dialogRef: MatDialogRef<DayDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _common: CommonService,
    private _itinerary: ItineraryService
  ) {}

  ngOnInit() {
    console.log(this.data)
  }

  save() {
    console.log(this.data)
    this.subscription = this._itinerary
      .addDay(this.data.id_itinerary, this.data.day_number, this.data.details)
      .subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar(result.message, "Ok");
          return this.dialogRef.close(this.data.details);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
