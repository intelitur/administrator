import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { UsersManagementComponent } from './users-management/users-management.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "userManagment",
    component: UsersManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
