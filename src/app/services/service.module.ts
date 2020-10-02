import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OfferRoutingModule } from "./service-routing.module";
import { ServiceCreateComponent } from "./components/service/service-create/service-create.component";
import { Services_ServicesComponent } from "./components/service/services.component";
import { ServiceRootComponent } from "./components/service-root.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { ServicesTableComponent } from "./components/service/services-table/services-table.component"; 
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FilterPipeModule } from "ngx-filter-pipe";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServicesTableComponent,
    ServiceCreateComponent,
    ServiceRootComponent,
    Services_ServicesComponent,
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
