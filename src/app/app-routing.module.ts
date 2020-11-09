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
  },
  //SOCIAL
  {
    path: "social",
    loadChildren:()=>
      import("./social/social.module").then(
        i => i.SocialModule
      ),
    canActivateChild: [LoggedInGuard]
    
  },
  {
    path: "ads",
    loadChildren: () =>
      import("./ads/ads.module").then(
        i => i.AdsModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "questions",
    loadChildren: () =>
      import("./frequent-questions/frequent-questions.module").then(
        i => i.FrecuentQustionsModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  { 
    path: "offers",
    loadChildren: () =>
      import("./offers/offer.module").then(
        i => i.OfferModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  { 
    path: "services",
    loadChildren: () =>
      import("./services/service.module").then(
        i => i.ServiceModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "contests",
    loadChildren: () =>
      import("./contests/contests.module").then(
        i => i.ContestsModule
      ),
    canActivateChild: [LoggedInGuard]
  },
  {
    path: "images",
    loadChildren: () =>
      import("./images/images.module").then(
        i => i.ImagesModule
      ),
    canActivateChild: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
