import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdsRootComponent } from './ads-root.component';
import { AdsMainComponent } from './components/ads-main/ads-main.component';
import { AdsManagementComponent } from './components/ads-management/ads-management.component';

const routes: Routes = [
  {
    path: "ads",
    component: AdsRootComponent,
    children: [
      {
        path: "all",
        component: AdsMainComponent
      },
      {
        path: ":ads_id",
        component: AdsManagementComponent
      }
    ]
  }
];

export const AdsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);