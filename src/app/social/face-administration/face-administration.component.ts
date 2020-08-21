import { Component, OnInit } from '@angular/core';
import { SocialDatabaseService } from "../social-services/social-database.service";
import { FacebSdkService } from "../social-services/faceb-sdk.service";
import { CommonService } from "../../general-services/common.service";
import { Subscription } from 'rxjs'

import {PageEvent} from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from "../../users/services/user.service";

import {FormBuilder, FormGroup, Validators} from '@angular/forms';//stepper
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-face-administration',
  templateUrl: './face-administration.component.html',
  styleUrls: ['./face-administration.component.scss']
})
export class FaceAdministrationComponent implements OnInit {
  private  subscriptionPaginas:Subscription;
  private  subscriptionPermisos:Subscription;
  private  subscriptionPermisosCount:Subscription;
  private  subscriptionCreaPaginas:Subscription;
  private  subscriptionCreaPermiso:Subscription;
  private  subscriptionPermissionState:Subscription;
  private  subscriptionPageState:Subscription;

  constructor(public dialog: MatDialog, private socialDB: SocialDatabaseService, private faceSDK:FacebSdkService, public commonS:CommonService, private userS:UserService, private _formBuilder: FormBuilder) { }

  //stepper settings
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userSelectec: any = "";
  pageSelected: any = "";
  stepperShow:boolean = false;

  //DIV pageValidation
  //contain the list of pages that user can use, get from facebook
  listPageValidation: Array<any> = [];
  pageListValidationShow:boolean = false;
  newPageSelected:any = "";
  //paginator
  paginatorPermissionListIndex: number = 0;
  paginatorPermissionListPageZise:number = 5;
  
  // MatPaginator Output
  pageEvent: PageEvent;
  


  ngOnInit() {
    this.loadDAta();
    
    //stepper setter
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }
  
   loadDAta(){
    //pages
    this.subscriptionPaginas =  this.socialDB.getAllPages()
    .subscribe(
      {
        next: (data:any) =>{
        
          this.socialDB.pages =[];
          
          data.forEach(element => {
            this.socialDB.pages.push(element.get_websites);
          })
          this.subscriptionPaginas.unsubscribe();

          

        },error:(err:HttpErrorResponse) => this.commonS.openSnackBar(`Error: ${err}`, "OK")
      });

    
    //permission count
    this.subscriptionPermisosCount = this.socialDB.getPermissionCount()
    .subscribe({
      next: (data :any) =>{
      
        this.socialDB.permissionsCount = data[0].get_permissions_count;

        this.subscriptionPermisosCount.unsubscribe();

      },error:(err:HttpErrorResponse) => this.commonS.openSnackBar(`Error ${err}`,"OK")
    });


    //get permissions paginator
    this.getPermissionPaginator();
  
  }

  pageChangeState(e,state){
    
    

    this.subscriptionPageState = this.socialDB.changePageState(e,state)
    .subscribe(
      {
        next:(data:any) =>{

          
          if(data[0].change_website_state != 1){
            this.commonS.openSnackBar("ERROR cambiar estado de página","OK")
          }else{
            this.commonS.openSnackBar("Cambio exitoso","OK")
          }

          this.loadDAta();

          this.subscriptionPageState.unsubscribe();
        },error:(err:HttpErrorResponse)=>{this.commonS.openSnackBar(`Error ${err}`,"OK")}
      }
    )
  }

  permissionChangeState(e,state:boolean){


    this.subscriptionPermissionState = this.socialDB.changePermissionState(e,!state)
    .subscribe(
      {
        next:(data:any) =>{


          if(data[0].change_permission_state == 1){
            
            this.commonS.openSnackBar("Cambio exitoso","OK");
            this.loadDAta();
          }else{
            this.commonS.openSnackBar("ERROR de BD cambia estado permiso","OK");
          }
          
   
         

          this.subscriptionPermissionState.unsubscribe();
        },error:(err:HttpErrorResponse)=>{this.commonS.openSnackBar(`Error ${err}`,"OK")}
      }
    )

  }


  /** find the name of one page based on the id 
   * 
   * @param page 
   */
  pageNameFind(page:number){
    let pageNameFound = <any>this.socialDB.pages.find(element => element.website_id == page)
    return pageNameFound.name;
  }

  /** find the name of one user based on the id 
   * 
   * @param page 
   */
  pageUserFullName(user:number){
    let userFound = <any>this.userS.users.find(element => element.user_id == user)
    return userFound.info.name+" "+userFound.info.lastName;
  }



  /** load event on paginator clicks
   * 
   * @param paginator 
   */
  loadPaginatorChanges(paginator){
    this.paginatorPermissionListPageZise = paginator.pageSize;
    this.paginatorPermissionListIndex = paginator.pageIndex;

    this.getPermissionPaginator();
    
  }



  /**get permission paginator
   * 
   */
  getPermissionPaginator(){
    //getPermissionBasedOnPaginator

    this.subscriptionPermisos = this.socialDB.getPermissionPaginator(this.paginatorPermissionListIndex,this.paginatorPermissionListPageZise)
    .subscribe({ next:(data:any)=>{


      this.socialDB.permissions = [];
      this.socialDB.permissions = data;

      this.subscriptionPermisos.unsubscribe();
    },error:(err:HttpErrorResponse) => this.commonS.openSnackBar(`Error ${err}`,"OK")

    });
  }





  /** send info for a new permission
   * 
   */
  sendNewPermissionInfo(){
    if(this.pageSelected =="" || this.userSelectec==""){
      alert("Completa la información.");
    }else{


      this.subscriptionCreaPermiso = this.socialDB.createPermission(this.userSelectec.user_id,this.pageSelected.website_id)
      .subscribe(
        {next:(data:any) => {
          
          if(data.error == 1){
            this.commonS.openSnackBar("ERROR el permiso ya existe","OK");
          }else{
            this.commonS.openSnackBar("Creación exitosa","OK");
          }
          this.loadDAta();  
          this.subscriptionCreaPermiso.unsubscribe();
        },error:(err:HttpErrorResponse) => this.commonS.openSnackBar(`Error ${err}`,"OK")
        });

        this.stepperShowTrigger();//close create permission div
        
    }

  }

  /** show create permission div
   * 
   */
  stepperShowTrigger(){
    this.stepperShow = !this.stepperShow;
   

    this.userSelectec = "";
    this.pageSelected = "";
  }

 

  /**get all user pages from facebook
   * 
   */
  getNewPageFromFacebook(){

    this.faceSDK.getLoginFacebook("pages_show_list")
    .then(
      res=>{
    

        if(res.authResponse == undefined){
          
        }else{
          this.faceSDK.getClientPages(res.authResponse.accessToken)
          .then(
            response=>{
             

              this.createUserPageUsageValidationList(response.data);

            })
        }

        
      }
    )

  }


  /** create a list of pages that user can use to post, the information from facebook can be dificult to filter,
   * the user can use this list to manually filter te pages that it want to use
   * 
   * @param list 
   */

  createUserPageUsageValidationList(list:Array<any>){
    
    if(list.length ==0){
      alert("No se encontró permisos a páginas.");
    }else{
      list.forEach(element => {
        element["selected"]=false;

        this.listPageValidation.push(element);
      });
      
      this.pageListValidationShow = true;

    }
  }

  closeAddNewPage(){
    this.listPageValidation = [];//clean the list
    this.pageListValidationShow = false; //hide component
  }

  addNewPage(){

    this.closeAddNewPage();

    if(this.newPageSelected == ""){
      alert("Ninguna página fue seleccionada.");
    }
    else{
     
      
      if(this.socialDB.searchPage(this.newPageSelected.id)){
     
        alert("La página seleccionada ya existe.");
      }else{
         
        this.subscriptionCreaPaginas = this.socialDB.createNewFacebookPage(this.newPageSelected.name,this.newPageSelected.id)
        .subscribe({
          next:(data:any)=>{
            
            if(data[0].create_website == null || data[0].create_website != 1){
              alert("Intentalo más tarde.");
            }
            else{
              this.commonS.openSnackBar("Página creada","OK"); 
             
              this.loadDAta();
            }
            this.subscriptionCreaPaginas.unsubscribe();

          },error:(err:HttpErrorResponse) => this.commonS.openSnackBar(`Error ${err}`,"OK")
          
        });
        
      

      }
    }
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(FaceAdminComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }


}

@Component({
  selector: 'help-face-administration',
  templateUrl: 'help-face-administration.html',
})
export class FaceAdminComponentDialog {}
