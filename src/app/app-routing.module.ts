import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./users/components/profile/profile.component";
import { MainNavComponent } from './main-nav/main-nav.component';
import { ItineraryRoutingModule } from './itinerary/itinerary-routing.module';
import { UsersRoutingModule } from './users/users-routing.module';

const routes: Routes = [
  {
    path: "itinerary",
    component: ItineraryRoutingModule
  },
  {
    path: "users",
    component: UsersRoutingModule
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
