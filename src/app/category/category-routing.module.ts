import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryRootComponent } from './category-root.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';

const routes: Routes = [
  {
    path: "category",
    component: CategoryRootComponent,
    children: [
      {
        path: "all",
        component: CategoriesComponent
      },
      {
        path: ":category_id",
        component:CategoryManagementComponent
      }
    ]
  }
];

export const CategoryRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);