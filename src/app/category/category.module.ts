import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryRootComponent} from './category-root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { CategoryFiltersComponent } from './components/categories/category-filters/category-filters.component';
import { DetailsComponent } from './components/category-management/details/details.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCreateComponent,
    CategoryRootComponent,
    CategoryManagementComponent,
    CategoryFiltersComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule
  ],
  entryComponents: [
    CategoryCreateComponent,
    CategoryFiltersComponent
  ]
})
export class CategoryModule { }
