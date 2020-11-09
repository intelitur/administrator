import { Component, OnInit, Input } from "@angular/core";
import { OfferService } from "../../../services/offer.service";
import { Offer, OfferDetaills } from "src/app/offers/models/Offer";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-offer-details",
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"],
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer: Offer;
  loading = true;
  offerDetaillsFG: FormGroup;
  private subscription: Subscription;
  private subscriptionDelete: Subscription;
  constructor(
    private _offer: OfferService,
    private _common: CommonService,
    private router: Router
  ) {
    this.offerDetaillsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.offerDetaillsFG.controls["name"].setValue(this._offer.offer_name);
    this.offerDetaillsFG.controls["description"].setValue(
      this._offer.offer_description
    );
  }
  /**
   * funtion that check of fields, if have new changes
   */
  check() {
    if (
      this.offerDetaillsFG.get("name").value == this._offer.offer_name &&
      this.offerDetaillsFG.get("description").value ==
        this._offer.offer_description
    ) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * delete changes locals in the inputs
   */
  reverse() {
    this.offerDetaillsFG.controls["name"].setValue(this._offer.offer_name);
    this.offerDetaillsFG.controls["description"].setValue(
      this._offer.offer_description
    );
  }
  /**
   * @function put new changes in the name and description offer
   */
  applyChanges() {
    this.subscription = this._offer
      .saveOffer(
        new OfferDetaills(
          this.offerDetaillsFG.get("name").value,
          this.offerDetaillsFG.get("description").value,
          true
        ),
        this._offer.offer_id
      )
      .subscribe({
        next: (result: ResponseInterface) => {
          this._offer.offer_name = this.offerDetaillsFG.controls["name"].value;
          this._offer.offer_description = this.offerDetaillsFG.controls[
            "description"
          ].value;
          this._common.openSnackBar("Cambios realizados", "Ok");
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err),
      });
  }
  /**
   * @function delete of offer by id
   */
  deleteOffer() {
    this._common
      .confirmationDialog(
        `¿Desea eliminar la oferta: ${this._offer.offer_name}?`
      )
      .then(async (result) => {
        if (result) {
          this.subscriptionDelete = this._offer
            .deleteOffer(this._offer.offer_id)
            .subscribe({
              next: (result: ResponseInterface) => {
                this.router.navigate(["/offers/all"]);
                this._common.openSnackBar("Oferta eliminada", "Ok");
              },
              error: (err: HttpErrorResponse) => this._common.handleError(err),
            });
        } 
      });
  }
}
