import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TouristRoutesRootComponent } from './tourist-routes-root.component';
import { TouristRoutesRoutingModule } from './tourist-routes-routing.module';
import { AllTouristRoutesComponent } from './components/all-tourist-routes/all-tourist-routes.component';
import { CreateTouristRoutesComponent } from './components/create-tourist-routes/create-tourist-routes.component';
import { ManagementTouristRoutesComponent } from './components/management-tourist-routes/management-tourist-routes.component';
import { TouristRoutesDetailsComponent } from './components/management-tourist-routes/tourist-routes-details/tourist-routes-details.component';


@NgModule({
  declarations: [
    TouristRoutesRootComponent,
    AllTouristRoutesComponent,
    CreateTouristRoutesComponent,
    ManagementTouristRoutesComponent,
    TouristRoutesDetailsComponent
  ],
  imports: [
    CommonModule,
    TouristRoutesRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
  ],
  providers: [DatePipe],
})
export class TouristRoutesModule { }
