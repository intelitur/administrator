import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeograpihicLayersRoutingModule } from './geograpihc-layers-rounting.module';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SharedModule } from '../shared.module';
import { AllGeographicLayersComponent } from './components/all-geographic-layers/all-geographic-layers.component';
import { GeographicLayersRootComponent } from './geographic-layers-root.component';
import { CreateGeographicLayerComponent } from './components/create-geographic-layer/create-geographic-layer.component';
import { ManagementGeographicLayerComponent } from './components/management-geographic-layer/management-geographic-layer.component';
import { DetailsGeographicLayerComponent } from './components/management-geographic-layer/details-geographic-layer/details-geographic-layer.component';
import { UbicationGeographicLayerComponent } from './components/management-geographic-layer/ubication-geographic-layer/ubication-geographic-layer.component';



@NgModule({
  declarations: [
    GeographicLayersRootComponent,
    AllGeographicLayersComponent,
    CreateGeographicLayerComponent,
    ManagementGeographicLayerComponent,
    DetailsGeographicLayerComponent,
    UbicationGeographicLayerComponent
  ],
  entryComponents: [CreateGeographicLayerComponent],
  imports: [
    CommonModule,
    GeograpihicLayersRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
    LeafletModule,
  ]
})
export class GeographicLayersModule { }
