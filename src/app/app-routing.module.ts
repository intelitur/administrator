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
  },
  {
    path: "events",
    loadChildren: () =>
      import("./event/event.module").then(
        i => i.EventModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "categories",
    loadChildren: () =>
      import("./category/category.module").then(
        i => i.CategoryModule
      ),
    canActivateChild: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
