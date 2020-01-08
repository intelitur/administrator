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
  templateUrl: "./create-day.component.html",
  styleUrls: ["./create-day.component.scss"]
})
export class CreateDayComponent implements OnInit {
  subscription: Subscription;
  constructor(
    @Optional() public dialogRef: MatDialogRef<CreateDayComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _common: CommonService,
    private _itinerary: ItineraryService
  ) {}

  ngOnInit() {
  }

  save() {
    this.subscription = this._itinerary
      .addDay(this.data.id_itinerary, this.data.day_number, this.data.details, this.data.duration + 1)
      .subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar(result.message, "Ok");
          return this.dialogRef.close(this.data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
