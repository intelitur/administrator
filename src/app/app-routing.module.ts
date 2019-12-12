import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
