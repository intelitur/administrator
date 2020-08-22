import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdsRootComponent } from './ads-root.component';
import { AdsManagementComponent } from './components/ads-management/ads-management.component';
import { AdsTabsComponent } from './components/ads-tabs/ads-tabs.component';

const routes: Routes = [
  {
    path: "ads",
    component: AdsRootComponent,
    children: [
      {
        path: "all",
        component: AdsTabsComponent
      },
      {
        path: ":ads_id",
        component: AdsManagementComponent
      }
    ]
  }
];

export const AdsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);