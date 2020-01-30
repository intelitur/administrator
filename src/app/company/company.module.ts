import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './components/management/management.component';
import { AddComponent } from './components/add/add.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyRootComponent } from './company-root.component';
import { CompanyRoutingModule } from "./company-routing.module";



@NgModule({
  declarations: [
    ManagementComponent, 
    AddComponent, 
    CompaniesComponent, 
    CompanyRootComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    
  ]
})
export class CompanyModule { }
