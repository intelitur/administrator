import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from "./components/carousel/carousel.component";
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
import { OfferServicesComponent } from "./components/offer-dashboard/offer-services/offer-details.component";



//import { FilterOptionsDialogComponent } from './components/offer/offers-table/filter-options-dialog/filter-options-dialog.component';
@NgModule({
  declarations: [
    OffersTableComponent,
    OfferCreateComponent,
    CarouselComponent,
    OfferRootComponent,
    Offers_ServicesComponent,
    OfferDashboardComponent,
    OfferDetailsComponent,
    OfferServicesComponent
    //FilterOptionsDialogComponent
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
    OfferCreateComponent
  ]
})
export class OfferModule { }
