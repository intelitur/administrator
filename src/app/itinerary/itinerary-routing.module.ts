import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ItineraryDashboardComponent } from './components/itinerary-dashboard/itinerary-dashboard.component';

const routes: Routes = [
  {
    path: "itinerary-dashboard",
    component: ItineraryDashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class ItineraryRoutingModule {}
