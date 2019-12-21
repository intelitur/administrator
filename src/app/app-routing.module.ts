import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "itinerary",
    loadChildren: () =>
      import("./itinerary/itinerary.module").then(
        i => i.ItineraryModule
      )
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then(
        i => i.UsersModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
