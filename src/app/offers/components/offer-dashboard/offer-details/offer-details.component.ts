import { Component, OnInit, Input } from "@angular/core";
import { OfferService } from "../../../services/offer.service";
import { Offer, OfferDetaills } from 'src/app/offers/models/Offer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseInterface } from 'src/app/globalModels/Response.interface';

@Component({
  selector: "app-offer-details",
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"]
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer: Offer;
  loading = true;
  offerDetaillsFG: FormGroup;
  private subscription: Subscription;
  constructor(private _offer: OfferService, private _common: CommonService,) {
    this.offerDetaillsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.offerDetaillsFG.controls['name'].setValue(this._offer.offer_name)
    this.offerDetaillsFG.controls['description'].setValue(this._offer.offer_description)
  }
  check(){
    if(this.offerDetaillsFG.get('name').value == this._offer.offer_name && this.offerDetaillsFG.get('description').value == this._offer.offer_description){
      return true;
    }
    else{
      return false;
    }
  }
  reverse(){
    this.offerDetaillsFG.controls['name'].setValue(this._offer.offer_name)
    this.offerDetaillsFG.controls['description'].setValue(this._offer.offer_description)
  }
  applyChanges(){
    this.subscription = this._offer
      .saveOffer(new OfferDetaills(
        this.offerDetaillsFG.get('name').value,
        this.offerDetaillsFG.get('description').value,
        true
      ),this._offer.offer_id
    ).subscribe({
        next: (result: ResponseInterface) => {
          this._offer.offer_name = this.offerDetaillsFG.controls['name'].value;
          this._offer.offer_description = this.offerDetaillsFG.controls['description'].value;
          this._common.openSnackBar("Cambios realizados", "Ok");
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
}
