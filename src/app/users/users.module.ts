import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { ProfileComponent } from './components/profile/profile.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    UsersManagementComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
     SharedModule,
     FormsModule,
     UsersRoutingModule],
  exports: [],
  entryComponents: [AddAdminComponent]
})
export class UsersModule {}
