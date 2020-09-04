import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServiceRootComponent } from './components/service-root.component';
import { Services_ServicesComponent } from './components/service/services.component';
import { ServiceDashboardComponent } from './components/service-dashboard/service-dashboard.component';

const routes: Routes = [
  {
    path: "services",
    component: ServiceRootComponent,
    children: [
      {
        path: "all",
        component: Services_ServicesComponent
      },
      {
        path: "dashboard",
        component: ServiceDashboardComponent
      }
    ]
  }
];

export const OfferRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
