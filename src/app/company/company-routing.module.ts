import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompaniesComponent } from "./components/companies/companies.component";
import { CompanyRootComponent } from './company-root.component';
import { ManagementComponent } from './components/management/management.component';

const routes: Routes = [
  {
    path: "company",
    component: CompanyRootComponent,
    children: [
      {
        path: "all",
        component: CompaniesComponent
      },
      {
        path: ":company_id",
        component: ManagementComponent
      }
    ]
  }
];

export const CompanyRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
