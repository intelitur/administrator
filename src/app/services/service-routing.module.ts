import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServiceRootComponent } from './components/service-root.component';
import { Services_ServicesComponent } from './components/service/services.component';

const routes: Routes = [
  {
    path: "services",
    component: ServiceRootComponent,
    children: [
      {
        path: "all",
        component: Services_ServicesComponent
      }
    ]
  }
];

export const OfferRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
