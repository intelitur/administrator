import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { OfferService } from "src/app/offers/services/offer.service";
import { TouristRoute } from "src/app/tourist-routes/models/tourist-route";
import { TouristRoutesService } from "src/app/tourist-routes/services/tourist-routes.service";

@Component({
  selector: "app-tourist-routes-offers",
  templateUrl: "./tourist-routes-offers.component.html",
  styleUrls: ["./tourist-routes-offers.component.scss"],
})
export class TouristRoutesOffersComponent implements OnInit {
  filter: any = {
    name: "",
  };

  @Input() myRoute: TouristRoute;
  loading: boolean = false;
  associateOffers: Array<any> = [];
  subscription: Subscription;
  subscription2: Subscription;
  selectedOffer: any;

  constructor(
    public touristRoutesService: TouristRoutesService,
    public offerService: OfferService,
    public commonService: CommonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.offerService.getOffers().subscribe({
      next: (data: any) => {
        this.offerService.offers = data;
        this.subscription.unsubscribe();
      },
      error: (err: HttpErrorResponse) =>
        this.commonService.openSnackBar(`Error: ${err}`, "OK"),
    });

    this.getRouteOffers()
  }

  getRouteOffers() {
    this.subscription2 = this.touristRoutesService
      .getTouristRouteOffers(this.myRoute.route_id)
      .subscribe({
        next: (data: any) => {
          this.associateOffers = [];
          data.forEach((val) => this.associateOffers.push(val));
          this.subscription2.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }

  addOffer() {
    let offer = this.selectedOffer;
    let offersID = this.getOffersID();

    let index = offersID.indexOf(offer.offer_id);

    if (index < 0) {
      this.loading = true;

      this.touristRoutesService
        .addOfferToTouristRoute(this.myRoute.route_id, offer.offer_id)
        .subscribe({
          next: (data) => {
            if (data.status == 201) {
              this.getRouteOffers();
              this.commonService.openSnackBar("Se ha añadido la oferta", "OK");
              this.loading = false;
            }
          },
          error: (err: HttpErrorResponse) =>
            this.commonService.openSnackBar(`Error: ${err}`, "OK"),
        });
    } else {
      this.commonService.openSnackBar("¡La oferta ya ha sido agregada!", "OK");
    }
  }

  getOffersID(): any[] {
    let ids = [];
    this.associateOffers.forEach((element) => ids.push(element.offer_id));
    return ids;
  }

  removeOffer(offer) {
    this.loading = true;
    this.touristRoutesService
      .deleteOfferFromTouristRoute(this.myRoute.route_id, offer.offer_id)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.getRouteOffers();
            this.commonService.openSnackBar("La oferta ha sido removida", "OK");
            this.loading = false;
          }
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }
}
