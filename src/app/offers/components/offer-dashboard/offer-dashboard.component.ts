import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OfferService } from "../../services/offer.service";
import { Subscription } from "rxjs";
import { Itinerary } from "../../models/Itinerary";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";

@Component({
  selector: "app-offer-dashboard",
  templateUrl: "./offer-dashboard.component.html",
  styleUrls: ["./offer-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferDashboardComponent implements OnInit, OnDestroy {
  checked: boolean = false;
  subscription: Subscription;
  itinerary: Itinerary;
  constructor(
    private _offer: OfferService,
    private _common: CommonService,
    private _router: Router
  ) {}

  ngOnInit() {
    
    /** 
    if (!this._offer.itinerary_id)
      this._router.navigate(["itineraries/show-all"]);
    else
      this.subscription = this._offer
        .getItineraryFullInfo(this._offer.itinerary_id)
        .subscribe({
          next: (data: any) => {
            this.itinerary = data.data;
          },
          error: (err: HttpErrorResponse) => this._common.handleError(err)
        });*/
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
