import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UsersManagementComponent } from "./components/users-management/users-management.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UserRootComponent } from "./user-root.component";

const routes: Routes = [
  {
    path: "user",
    component: UserRootComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "user-managment",
        component: UsersManagementComponent
      }
    ]
  }
];
export const UsersRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
