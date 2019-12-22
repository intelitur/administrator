import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItineraryService } from "../../services/itinerary.service";
import { Subscription } from "rxjs";
import { Itinerary } from "../../models/Itinerary";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";

@Component({
  selector: "app-itinerary-details",
  templateUrl: "./itinerary-dashboard.component.html",
  styleUrls: ["./itinerary-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryDashboardComponent implements OnInit {
  checked: boolean = false;
  subscription: Subscription;
  itinerary: Itinerary;
  constructor(
    private _itinerary: ItineraryService,
    private _common: CommonService
  ) {}

  ngOnInit() {
    this.subscription = this._itinerary
      .getItineraryFullInfo(this._itinerary.itinerary_id)
      .subscribe({
        next: (data: any) => {
          this.itinerary = data.data;
          console.log(this.itinerary);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
}
