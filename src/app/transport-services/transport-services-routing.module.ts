import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManagementTransportServicesComponent } from './components/management-transport-services/management-transport-services.component';
import { RequestTransportServicesComponent } from './components/request-transport-services/request-transport-services.component';
import { TabsTransportServicesComponent } from './components/tabs-transport-services/tabs-transport-services.component';
import { TransportServicesRootComponent } from './transport-services-root.component';


const routes: Routes = [
  {
    path: "transport-services",
    component: TransportServicesRootComponent,
    children: [
      {
        path: "all",
        component: TabsTransportServicesComponent
      },
      {
        path: "requests",
        component: RequestTransportServicesComponent
      },
      {
        path: ":transport_service_id",
        component: ManagementTransportServicesComponent
      },
    ]
  }
];

export const TransportServicesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
