import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllGeographicLayersComponent } from './components/all-geographic-layers/all-geographic-layers.component';
import { ManagementGeographicLayerComponent } from './components/management-geographic-layer/management-geographic-layer.component';
import { GeographicLayersRootComponent } from './geographic-layers-root.component';

const routes: Routes = [
    {
      path: "geographic-layers",
      component: GeographicLayersRootComponent,
      children: [
        {
          path: "all",
          component: AllGeographicLayersComponent
        },
        {
          path: ":layer_id",
          component: ManagementGeographicLayerComponent
        }
      ]
    }
  ];
  
export const GeograpihicLayersRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);