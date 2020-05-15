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
import { DatePipe } from '@angular/common';
import { EventRequestComponent } from './components/event-request/event-request.component';
import { EventRequestFiltersComponent } from './components/event-request/event-request-filters/event-request-filters.component';

@NgModule({
    declarations: [
    EventsComponent,
    EventCreateComponent,
    ManagementComponent,
    EventRootComponent,
    LocationComponent,
    EventDetailsComponent,
    EventFiltersComponent,
    EventRequestComponent,
    EventRequestFiltersComponent
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
    providers: [DatePipe],
    entryComponents: [
      EventCreateComponent,
      EventFiltersComponent,
      EventRequestFiltersComponent
    ]
  })
  export class EventModule { }