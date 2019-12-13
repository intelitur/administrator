import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ItineraryDashboardComponent } from './components/itinerary-dashboard/itinerary-dashboard.component';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryFormDialogComponent } from './components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component';
import { ItinerariesComponent } from './components/itineraries/itineraries.component';
import { ItineraryRootComponent } from './components/itinerary-root.component';
import { ItineraryDistributionComponent } from './components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component';
import { ItinerariesTableComponent } from './components/itineraries/itineraries-table/itineraries-table.component';
import { UploadImagesComponent } from './components/itineraries/itinerary-form-dialog/upload-images/upload-images.component';
import { ItineraryDetailsComponent } from './components/itinerary-dashboard/itinerary-details/itinerary-details.component';
import { OffersComponent } from './components/itinerary-dashboard/itinerary-distribution/offers/offers.component';
import { PromotionsComponent } from './components/itinerary-dashboard/itinerary-distribution/promotions/promotions.component';
import { ItineraryMapComponent } from './components/itinerary-dashboard/itinerary-map/itinerary-map.component';



@NgModule({
  declarations: [
    ItinerariesComponent,
    ItinerariesTableComponent,
    ItineraryFormDialogComponent,
    CarouselComponent,
    UploadImagesComponent,
    ItineraryDashboardComponent,
    ItineraryRootComponent,
    ItineraryDistributionComponent,
    ItineraryDetailsComponent,
    OffersComponent,
    PromotionsComponent,
    ItineraryMapComponent
  ],
  imports: [CommonModule, ItineraryRoutingModule, SharedModule],
  exports: [ItineraryRootComponent],
  entryComponents: [ItineraryFormDialogComponent, ItineraryDetailsComponent]
})
export class ItineraryModule {}
