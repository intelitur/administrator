import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { ManagementComponent } from './components/management/management.component';
import { EventRootComponent } from './event-root.component';
import { EventRoutingModule } from './event-rounting.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ColorCircleModule } from 'ngx-color/circle';
import { LocationComponent } from './components/management/location/location.component';
import { EventDetailsComponent } from './components/management/event-details/event-details.component'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EventFiltersComponent } from './components/events/event-filters/event-filters.component';

@NgModule({
    declarations: [
    EventsComponent,
    EventCreateComponent,
    ManagementComponent,
    EventRootComponent,
    LocationComponent,
    EventDetailsComponent,
    EventFiltersComponent
  ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      EventRoutingModule,
      FilterPipeModule,
      ColorCircleModule,
      LeafletModule
    ],
    entryComponents: [
      EventCreateComponent,
      EventFiltersComponent
    ]
  })
  export class EventModule { }