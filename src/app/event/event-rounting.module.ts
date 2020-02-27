import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventRootComponent } from "./event-root.component"
import { EventsComponent } from './components/events/events.component';
import { ManagementComponent } from './components/management/management.component';

const routes: Routes = [
    {
      path: "event",
      component: EventRootComponent,
      children: [
        {
          path: "all",
          component: EventsComponent
        },
        {
          path: ":details",
          component: ManagementComponent
        }
      ]
    }
  ];
  
export const EventRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);