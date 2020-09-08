import { Component, OnInit, Input } from "@angular/core";
import { OfferService } from "../../../services/offer.service";

@Component({
  selector: "app-offer-services",
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"]
})
export class OfferServicesComponent implements OnInit {

  constructor(private _offer: OfferService
  ) {}

  ngOnInit() {
    console.log(this._offer.offer_id);
    console.log(this._offer.offer_name);
    console.log(this._offer.offer_descripcion);
  }
}
