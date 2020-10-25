import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesRoutingModule } from './images-routing.module';
import { SharedModule } from '../shared.module';
import { ImagesManagementComponent } from './components/images-management/images-management.component';
import { ImagesRootComponent } from './images-root.component';



@NgModule({
  declarations: [
    ImagesRootComponent,
    ImagesManagementComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    SharedModule,
  ]
})
export class ImagesModule { }
