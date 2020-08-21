import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo para hacer el routing
import { RouterModule, Routes } from '@angular/router';
//importo mis componentes
import { NavSocialComponent } from "./nav-social.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { ListPostComponent } from "./list-post/list-post.component";
import { GetPostComponent } from "./get-post/get-post.component";

const routes: Routes = [
  { 
    path: "social-nav",
    component: NavSocialComponent,
    children:[
      {
        path: "create-post",
        component: CreatePostComponent
      },
      {
        path: "list-post",
        component: ListPostComponent
      },
      {
        path: "get-post",
        component: GetPostComponent
      }

    ]
  }
];




//export class SocialRoutingModule { }
export const SocialRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);