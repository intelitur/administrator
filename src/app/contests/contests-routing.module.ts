import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContestsMainComponent } from './components/contests-main/contests-main.component';
import { ContestsManagementComponent } from './components/contests-management/contests-management.component';
import { ContestsRootComponent } from './contests-root.component';

const routes: Routes = [
  {
    path: "contests",
    component: ContestsRootComponent,
    children: [
      {
        path: "all",
        component: ContestsManagementComponent
      },
      {
        path: ":contest_id",
        component: ContestsManagementComponent
      }
    ]
  }
];

export const ContestsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);