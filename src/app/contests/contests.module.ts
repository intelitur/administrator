import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContestsCreateComponent } from './components/contests-create/contests-create.component';
import { ContestsMainComponent } from './components/contests-main/contests-main.component';
import { ContestsManagementComponent } from './components/contests-management/contests-management.component';
import { ContestsRoutingModule } from './contests-routing.module';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ContestsRootComponent } from './contests-root.component';
import { ContestsDetailsComponent } from './components/contests-management/contests-details/contests-details.component';

@NgModule({
  declarations: [
    ContestsRootComponent,
    ContestsCreateComponent, 
    ContestsMainComponent, 
    ContestsManagementComponent, ContestsDetailsComponent
  ],
  entryComponents: [ContestsCreateComponent],
  providers: [DatePipe],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule
  ]
})
export class ContestsModule { }
