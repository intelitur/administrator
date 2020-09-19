import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { OfferRoutingModule } from "./service-routing.module";
import { ServiceCreateComponent } from "./components/service/service-create/service-create.component";
import { Services_ServicesComponent } from "./components/service/services.component";
import { ServiceRootComponent } from "./components/service-root.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { ServicesTableComponent } from "./components/service/services-table/services-table.component"; 
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FilterPipeModule } from "ngx-filter-pipe";
import { FormsModule } from '@angular/forms';

import { ServiceDashboardComponent } from "./components/service-dashboard/service-dashboard.component";
import { ServiceDetailsComponent } from "./components/service-dashboard/service-details/offer-details.component";
import { ServiceServicesComponent } from "./components/service-dashboard/offer-services/offer-details.component";



//import { FilterOptionsDialogComponent } from './components/offer/offers-table/filter-options-dialog/filter-options-dialog.component';
@NgModule({
  declarations: [
    ServicesTableComponent,
    ServiceCreateComponent,
    CarouselComponent,
    ServiceRootComponent,
    Services_ServicesComponent,
    ServiceDashboardComponent,
    ServiceDetailsComponent,
    ServiceServicesComponent
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
  exports: [ServiceRootComponent],
  entryComponents: [
    ServiceCreateComponent
  ]
})
export class ServiceModule { }
