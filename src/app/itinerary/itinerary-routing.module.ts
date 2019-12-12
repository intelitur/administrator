import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItinerariesComponent } from "./components/itineraries/itineraries.component";
import { ItineraryDashboardComponent } from "./components/itinerary-dashboard/itinerary-dashboard.component";
import { ItineraryRootComponent } from "./components/itinerary-root.component";

const routes: Routes = [
  {
    path: "itineraries",
    component: ItineraryRootComponent,
    children: [
      {
        path: "show-all",
        component: ItinerariesComponent
      },
      {
        path: "dashboard",
        component: ItineraryDashboardComponent
      }
    ]
  }
];

export const ItineraryRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);