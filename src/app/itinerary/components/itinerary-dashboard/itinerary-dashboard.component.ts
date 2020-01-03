import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ItineraryService } from "../../services/itinerary.service";
import { Subscription } from "rxjs";
import { Itinerary } from "../../models/Itinerary";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";

@Component({
  selector: "app-itinerary-dashboard",
  templateUrl: "./itinerary-dashboard.component.html",
  styleUrls: ["./itinerary-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryDashboardComponent implements OnInit, OnDestroy {
  checked: boolean = false;
  subscription: Subscription;
  itinerary: Itinerary;
  constructor(
    private _itinerary: ItineraryService,
    private _common: CommonService,
    private _router: Router
  ) {}

  ngOnInit() {
    if (!this._itinerary.itinerary_id)
      this._router.navigate(["itineraries/show-all"]);
    else
      this.subscription = this._itinerary
        .getItineraryFullInfo(this._itinerary.itinerary_id)
        .subscribe({
          next: (data: any) => {
            this.itinerary = data.data;
          },
          error: (err: HttpErrorResponse) => this._common.handleError(err)
        });
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
