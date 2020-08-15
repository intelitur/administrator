import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventRootComponent } from "./event-root.component"
import { ManagementComponent } from './components/management/management.component';
import { EventRequestComponent } from './components/event-request/event-request.component';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';

const routes: Routes = [
    {
      path: "event",
      component: EventRootComponent,
      children: [
        {
          path: "all",
          component: MainTabsComponent
        },
        {
          path: "request",
          component: EventRequestComponent
        },
        {
          path: ":event_id",
          component: ManagementComponent
        }
      ]
    }
  ];
  
export const EventRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);