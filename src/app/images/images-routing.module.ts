import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ImagesManagementComponent } from './components/images-management/images-management.component';
import { ImagesRootComponent } from './images-root.component';

const routes: Routes = [
  {
    path: "images",
    component: ImagesRootComponent,
    children: [
      {
        path: "all",
        component: ImagesManagementComponent
      }
    ]
  }
];

export const ImagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
