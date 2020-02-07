import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './components/management/management.component';
import { AddComponent } from './components/add/add.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyRootComponent } from './company-root.component';
import { CompanyRoutingModule } from "./company-routing.module";
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CompanyDetailsComponent } from './components/management/company-details/company-details.component';
import { CompanyUsersComponent } from './components/management/company-users/company-users.component';
import { CompanyMapComponent } from './components/management/company-map/company-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CompanyRequestsComponent } from './components/management/company-requests/company-requests.component';



@NgModule({
  declarations: [
    ManagementComponent, 
    AddComponent, 
    CompaniesComponent, 
    CompanyRootComponent, 
    CompanyDetailsComponent, 
    CompanyUsersComponent, CompanyMapComponent, CompanyRequestsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
    LeafletModule, 
    
  ]
})
export class CompanyModule { }
