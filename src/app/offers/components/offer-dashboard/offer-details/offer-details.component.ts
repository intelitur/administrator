import { Component, OnInit, Input } from "@angular/core";
import { OfferService } from "../../../services/offer.service";
import { Offer } from 'src/app/offers/models/Offer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-offer-details",
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"]
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer: Offer;
  loading = true;
  offerDetaillsFG: FormGroup;
  constructor(private _offer: OfferService) {
    this.offerDetaillsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    
    console.log("entrada");
    //console.log(this.offer.name);
    console.log(this._offer.offer_id);
    console.log(this._offer.offer_name);
    console.log(this._offer.offer_descripcion);
    this.offerDetaillsFG.controls['name'].setValue(this._offer.offer_name)
    this.offerDetaillsFG.controls['description'].setValue(this._offer.offer_descripcion)
  }

  isChanged(): boolean {
    /** 
    let old = {
      name: this.offer.name
    }
    return !(JSON.stringify(old) === JSON.stringify(this.offerDetaillsFG.value))
    */
   return true;
  }
}
