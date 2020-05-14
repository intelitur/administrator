import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventRootComponent } from "./event-root.component"
import { ManagementComponent } from './components/management/management.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';

const routes: Routes = [
    {
      path: "event",
      component: EventRootComponent,
      children: [
        {
          path: "all",
          component: PrincipalViewComponent
        },
        {
          path: ":event_id",
          component: ManagementComponent
        }
      ]
    }
  ];
  
export const EventRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);