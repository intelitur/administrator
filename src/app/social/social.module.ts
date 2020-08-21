import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo el modulo con material y demas
import { SharedModule } from "../shared.module";

import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { GetPostComponent } from './get-post/get-post.component';
import { SocialRoutingModule } from './social-routing.module';
import { NavSocialComponent } from './nav-social.component';

import { CreatePostComponentDialog } from "./create-post/create-post.component";
import { FaceAdminComponentDialog } from "./face-administration/face-administration.component";
import { ListPostComponentDialog } from "./list-post/list-post.component";

import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FaceAdministrationComponent } from './face-administration/face-administration.component';

//material
import {MatCheckboxModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [ CreatePostComponent, 
    ListPostComponent, 
    GetPostComponent, 
    NavSocialComponent, FaceAdministrationComponent, CreatePostComponentDialog, FaceAdminComponentDialog,ListPostComponentDialog],
  imports: [
    CommonModule,
    SocialRoutingModule,
    SharedModule,
    PickerModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatStepperModule
  ],
  exports:[
    NavSocialComponent
  ],
  entryComponents:[CreatePostComponentDialog,FaceAdminComponentDialog,ListPostComponentDialog]
})
export class SocialModule { }
