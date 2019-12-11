import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { ProfileComponent } from './components/profile/profile.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterBusinessManComponent } from './components/login/register-business-man/register-business-man.component';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    UsersManagementComponent,
    AddAdminComponent,
    LoginComponent,
    RegisterBusinessManComponent
  ],
  imports: [
    CommonModule,
     SharedModule,
     FormsModule,
     UsersRoutingModule],
  exports: [],
  entryComponents: [AddAdminComponent,RegisterBusinessManComponent]
})
export class UsersModule {}
