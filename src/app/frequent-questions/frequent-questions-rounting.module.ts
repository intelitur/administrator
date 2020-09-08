import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FrequentQuestionsRootComponent } from './frequent-questions-root.component';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';

const routes: Routes = [
    {
      path: "questions",
      component: FrequentQuestionsRootComponent,
      children: [
        {
          path: "all",
          component: AllQuestionsComponent
        },
      ]
    }
  ];
  
export const FrequentQuestionsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);