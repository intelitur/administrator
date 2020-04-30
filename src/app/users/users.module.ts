import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { ProfileComponent } from "./components/profile/profile.component";
import { UsersManagementComponent } from "./components/users-management/users-management.component";
import { AddAdminComponent } from "./components/add-admin/add-admin.component";

import { FormsModule } from "@angular/forms";
import { UsersRoutingModule } from "./users-routing.module";
import { FilterPipeModule } from "ngx-filter-pipe";
import { UserRootComponent } from "./user-root.component";
import { ProfileInfoComponent } from "./components/profile/profile-info/profile-info.component";
import { FavoriteItineraryComponent } from "./components/profile/favorite-itinerary/favorite-itinerary.component";
import { FavoriteOfferComponent } from "./components/profile/favorite-offer/favorite-offer.component";
import { ProfileCompaniesComponent } from './components/profile/profile-companies/profile-companies.component';
import { RequestCompanyUnionComponent } from './components/profile/request-company-union/request-company-union.component';
import { AddRequestCompanyUnionComponent } from './components/profile/add-request-company-union/add-request-company-union.component';
@NgModule({
  declarations: [
    ProfileComponent,
    UsersManagementComponent,
    AddAdminComponent,
    UserRootComponent,
    ProfileInfoComponent,
    FavoriteItineraryComponent,
    FavoriteOfferComponent,
    ProfileCompaniesComponent,
    RequestCompanyUnionComponent,
    AddRequestCompanyUnionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    UsersRoutingModule,
    FilterPipeModule
  ],
  exports: [UserRootComponent],
  entryComponents: [AddAdminComponent, AddRequestCompanyUnionComponent]
})
export class UsersModule {}
