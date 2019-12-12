import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "userManagment",
    component: UsersManagementComponent
  }

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class UsersRoutingModule {}
