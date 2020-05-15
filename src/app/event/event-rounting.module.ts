import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventRootComponent } from "./event-root.component"
import { ManagementComponent } from './components/management/management.component';
import { EventsComponent } from './components/events/events.component';
import { EventRequestComponent } from './components/event-request/event-request.component';

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
          path: ":event_id",
          component: ManagementComponent
        },
        {
          path: "event_request",
          component: EventRequestComponent
        }
      ]
    }
  ];
  
export const EventRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);