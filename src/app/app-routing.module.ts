import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { UsersManagementComponent } from "./users-management/users-management.component";
import { ItineraryDashboardComponent } from "./itinerary-dashboard/itinerary-dashboard.component";
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "userManagment",
    component: UsersManagementComponent
  },
  {
    path: "itinerary-dashboard",
    component: ItineraryDashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "main-nav",
    component: MainNavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
