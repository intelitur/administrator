import { Component, OnInit, Input } from "@angular/core";
import { ServiceService } from "../../../services/service.service";

@Component({
  selector: "app-offer-services",
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"]
})
export class ServiceServicesComponent implements OnInit {

  constructor(private _offer: ServiceService
  ) {}

  ngOnInit() {
    console.log(this._offer.offer_id);
    console.log(this._offer.offer_name);
    console.log(this._offer.offer_descripcion);
  }
}
