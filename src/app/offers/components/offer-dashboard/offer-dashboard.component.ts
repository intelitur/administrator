import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { OfferService } from "../../services/offer.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-offer-dashboard",
  templateUrl: "./offer-dashboard.component.html",
  styleUrls: ["./offer-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferDashboardComponent implements OnInit, OnDestroy {
  checked: boolean = false;
  subscription: Subscription;
  constructor(
    private _offer: OfferService,
    private _common: CommonService,
    private _router: Router
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
