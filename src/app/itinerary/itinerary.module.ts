import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ItinerariesTableComponent } from './components/itineraries/itineraries-table/itineraries-table.component';
import { ItineraryFormDialogComponent } from './components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component';
import { UploadImagesComponent } from './components/itineraries/itinerary-form-dialog/upload-images/upload-images.component';
import { ItinerariesComponent } from './components/itineraries/itineraries.component';
import { ItineraryDashboardComponent } from './components/itinerary-dashboard/itinerary-dashboard.component';
import { ItineraryRootComponent } from './components/itinerary-root.component';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryDistributionComponent } from './components/itinerary-dashboard/itinerary-distribution/itinerary-distribution.component';


@NgModule({
  declarations: [
    ItinerariesComponent,
    ItinerariesTableComponent,
    ItineraryFormDialogComponent,
    CarouselComponent,
    UploadImagesComponent,
    ItineraryDashboardComponent,
    ItineraryRootComponent,
    ItineraryDistributionComponent
  ],
  imports: [CommonModule, ItineraryRoutingModule, SharedModule],
  exports: [ItineraryRootComponent],
  entryComponents: [ItineraryFormDialogComponent]
})
export class ItineraryModule {}
