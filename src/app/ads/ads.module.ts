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



@NgModule({
  declarations: [AdsRootComponent,AdsManagementComponent, AdsMainComponent, AdsCreateComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
    LeafletModule, 
  ],
  entryComponents: [AdsCreateComponent]
})
export class AdsModule { }
