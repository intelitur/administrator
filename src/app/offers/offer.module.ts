import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OfferRoutingModule } from "./offer-routing.module";
import { OfferCreateComponent } from "./components/offer/offer-create/offer-create.component";
import { Offers_ServicesComponent } from "./components/offer/offers.component";
import { OfferRootComponent } from "./components/offer-root.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { OffersTableComponent } from "./components/offer/offers-table/offers-table.component"; 
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FilterPipeModule } from "ngx-filter-pipe";
import { FormsModule } from '@angular/forms';

import { OfferDashboardComponent } from "./components/offer-dashboard/offer-dashboard.component";
import { OfferDetailsComponent } from "./components/offer-dashboard/offer-details/offer-details.component";
import { OfferServicesComponent } from "./components/offer-dashboard/offer-services/offer-services.component";
import { OfferAddServiceComponent } from "./components/offer-dashboard/offer-add-service/offer-add-service.component";

@NgModule({
  declarations: [
    OffersTableComponent,
    OfferCreateComponent,
    OfferRootComponent,
    Offers_ServicesComponent,
    OfferDashboardComponent,
    OfferDetailsComponent,
    OfferServicesComponent,
    OfferAddServiceComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule,
    LeafletModule,
    ScrollingModule,
    FilterPipeModule,
    FormsModule
  ],
  exports: [OfferRootComponent],
  entryComponents: [
    OfferCreateComponent,
    OfferAddServiceComponent
  ]
})
export class OfferModule { }
