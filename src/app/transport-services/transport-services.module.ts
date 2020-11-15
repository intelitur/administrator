import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportServicesRoutingModule } from './transport-services-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SharedModule } from '../shared.module';
import { TransportServicesRootComponent } from './transport-services-root.component';
import { TabsTransportServicesComponent } from './components/tabs-transport-services/tabs-transport-services.component';
import { AllTransportServicesComponent } from './components/all-transport-services/all-transport-services.component';
import { RequestTransportServicesComponent } from './components/request-transport-services/request-transport-services.component';
import { CreateTransportServicesComponent } from './components/create-transport-services/create-transport-services.component';
import { ManagementTransportServicesComponent } from './components/management-transport-services/management-transport-services.component';
import { DetailsTransportServicesComponent } from './components/management-transport-services/details-transport-services/details-transport-services.component';
import { CategoriesTransportServicesComponent } from './components/categories-transport-services/categories-transport-services.component';
import { CreateCategoriesTransportServicesComponent } from './components/create-categories-transport-services/create-categories-transport-services.component';



@NgModule({
  declarations: [
    TransportServicesRootComponent,
    TabsTransportServicesComponent,
    AllTransportServicesComponent,
    RequestTransportServicesComponent,
    CreateTransportServicesComponent,
    ManagementTransportServicesComponent,
    DetailsTransportServicesComponent,
    CategoriesTransportServicesComponent,
    CreateCategoriesTransportServicesComponent
  ],
  imports: [
    CommonModule,
    TransportServicesRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
  ],
  entryComponents: [
    CreateTransportServicesComponent,
    CreateCategoriesTransportServicesComponent
  ]
})
export class TransportServicesModule { }
