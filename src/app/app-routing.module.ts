import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoggedInGuard } from './logged-in.guard';
const routes: Routes = [
  {
    path: "itinerary",
    loadChildren: () =>
      import("./itinerary/itinerary.module").then(
        i => i.ItineraryModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then(
        i => i.UsersModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "companies",
    loadChildren: () =>
      import("./company/company.module").then(
        i => i.CompanyModule
      ),
    canActivateChild: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
