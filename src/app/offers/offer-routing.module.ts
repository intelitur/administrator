import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OfferRootComponent } from './components/offer-root.component';
import { Offers_ServicesComponent } from './components/offer/offers.component';
import { OfferDashboardComponent } from './components/offer-dashboard/offer-dashboard.component';

const routes: Routes = [
  {
    path: "offers",
    component: OfferRootComponent,
    children: [
      {
        path: "all",
        component: Offers_ServicesComponent
      },
      {
        path: "dashboard",
        component: OfferDashboardComponent
      }
    ]
  }
];

export const OfferRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
