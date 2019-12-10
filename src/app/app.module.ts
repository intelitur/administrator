import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { SharedModule } from "./shared.module";
import { ProfileComponent } from "./profile/profile.component";
import { UsersManagementComponent } from "./users-management/users-management.component";
import { AddAdminComponent } from "./add-admin/add-admin.component";
import { ItineraryDashboardComponent } from "./itinerary-dashboard/itinerary-dashboard.component";
import { ItinerariesTableComponent } from "./itinerary-dashboard/itineraries-table/itineraries-table.component";
import { ItineraryFormDialogComponent } from "./itinerary-dashboard/itinerary-form-dialog/itinerary-form-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ProfileComponent,
    UsersManagementComponent,
    AddAdminComponent,
    ItineraryDashboardComponent,
    ItinerariesTableComponent,
    ItineraryFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddAdminComponent, ItineraryFormDialogComponent]
})
export class AppModule {}
