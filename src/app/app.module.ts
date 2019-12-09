import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedModule } from './shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ItineraryDashboardComponent } from './itinerary-dashboard/itinerary-dashboard.component';
import { ItinerariesTableComponent } from './itinerary-dashboard/itineraries-table/itineraries-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ProfileComponent,
    ItineraryDashboardComponent,
    ItinerariesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
