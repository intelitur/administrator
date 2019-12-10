import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItineraryDashboardComponent } from "./components/itinerary-dashboard/itinerary-dashboard.component";
import { ItinerariesTableComponent } from "./components/itinerary-dashboard/itineraries-table/itineraries-table.component";
import { ItineraryFormDialogComponent } from "./components/itinerary-dashboard/itinerary-form-dialog/itinerary-form-dialog.component";
import { ItineraryRoutingModule } from "./itinerary-routing.module";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from "./components/carousel/carousel.component";

@NgModule({
  declarations: [
    ItineraryDashboardComponent,
    ItinerariesTableComponent,
    ItineraryFormDialogComponent,
    CarouselComponent
  ],
  imports: [CommonModule, ItineraryRoutingModule, SharedModule],
  exports: [ItineraryDashboardComponent],
  entryComponents: [ItineraryFormDialogComponent]
})
export class ItineraryModule {}
