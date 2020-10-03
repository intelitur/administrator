import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllTouristRoutesComponent } from './components/all-tourist-routes/all-tourist-routes.component';
import { ManagementTouristRoutesComponent } from './components/management-tourist-routes/management-tourist-routes.component';
import { TouristRoutesRootComponent } from './tourist-routes-root.component';

const routes: Routes = [
  {
    path: "tourist-routes",
    component: TouristRoutesRootComponent,
    children: [
      {
        path: "all",
        component: AllTouristRoutesComponent
      },
      {
        path: ":tourist-route_id",
        component: ManagementTouristRoutesComponent
      }
    ]
  }
];

export const TouristRoutesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);