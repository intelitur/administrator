import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FrequentQuestionsRootComponent } from './frequent-questions-root.component';
import { FrequentQuestionsRoutingModule } from './frequent-questions-rounting.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DatePipe } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { QuestionsCreateComponent } from './components/questions-create/questions-create.component';

@NgModule({
    declarations: [
      FrequentQuestionsRootComponent,
      AllQuestionsComponent,
      QuestionsCreateComponent,
  ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      FrequentQuestionsRoutingModule,
      FilterPipeModule,
      LeafletModule,
      NgbModule
    ], 
    providers: [DatePipe],
    entryComponents: [
      QuestionsCreateComponent
    ]
  })
  export class FrecuentQustionsModule { }