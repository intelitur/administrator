import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsRootComponent } from './ads-root.component';
import { AdsRoutingModule } from "./ads-routing.module";
import { AdsManagementComponent } from './components/ads-management/ads-management.component';
import { AdsMainComponent } from './components/ads-main/ads-main.component';
import { AdsCreateComponent } from './components/ads-create/ads-create.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AdsTabsComponent } from './components/ads-tabs/ads-tabs.component';
import { AdsStadisticsComponent } from './components/ads-stadistics/ads-stadistics.component';
import { AdsDetailsComponent } from './components/ads-management/ads-details/ads-details.component';
import { AdsLocationComponent } from './components/ads-management/ads-location/ads-location.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AdsRootComponent,
    AdsManagementComponent, 
    AdsMainComponent, 
    AdsCreateComponent, 
    AdsTabsComponent, 
    AdsStadisticsComponent, 
    AdsDetailsComponent, 
    AdsLocationComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
    LeafletModule, 
  ],
  providers: [DatePipe],
  entryComponents: [AdsCreateComponent]
})
export class AdsModule { }
