import { Component, OnInit, ɵConsole } from '@angular/core';

import { FacebSdkService } from "../social-services/faceb-sdk.service";

import { AuthService } from "../../general-services/auth.service";
import { Subscription } from 'rxjs'
import { SocialDatabaseService } from "../social-services/social-database.service";
import { UserService } from "../../users/services/user.service";
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from "../../general-services/common.service";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  private  subscriptionUserPermissions:Subscription;


  textoTextField = '';//texto de la publicacion
  imagenPost = '';//imagen seleccionada para publicacion
  imagenPostPreview:boolean = false;
  //dates
  updateDateSelected;

  imageSelectecCheck : boolean = false;
  postCheckBool : boolean = true;

  //DIV pageValidation
  //contain the list of pages that user can use, get from facebook
  listPageValidation: Array<any> = [];
  pageListValidationShow:boolean = false;

  fileSelected:any = "";

  
  

  constructor(public dialog: MatDialog, public commonS:CommonService,private userS: UserService,private socialDB: SocialDatabaseService, private face_sdk_service :FacebSdkService, private authS : AuthService) { 

  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    
    
    //get actual user permissions 
    this.subscriptionUserPermissions = this.socialDB.getActualUserPermissions(this.userS.actualUser.user_id)
    .subscribe(
      {
        next: (data:any)=>{

          this.socialDB.permissionsActualUser = [];
          data.forEach(element => {
            this.socialDB.permissionsActualUser.push(element.get_permissions_by_user);
          });

        

          this.subscriptionUserPermissions.unsubscribe();
        },error:(err:HttpErrorResponse)=> this.commonS.openSnackBar(`Error: ${err}`, "OK")
      }
    )
  }

  /**
   * @function load image file as a preview
   * @param event 
   */
  //cargar preview al seleccionar imagen para postear
  loadFile(event) {
    var reader = new FileReader();
    reader.onload = function() {
      
      var output: HTMLElement = document.getElementById("output");
      output.setAttribute('src',reader.result.toString())// = reader.result;
     
    };

    if(event.target.files[0]==null){
      
      this.imagenPostPreview = false;
      
      this.checkPost()
      return;
    }  
    else{
      reader.readAsDataURL(event.target.files[0]);
      this.imagenPostPreview = true;

      this.imageSelectecCheck = true;
      this.checkPost()
    }
    
  };  

 


  /**
   * @function update textarea including the selected emoji in the emoji piker
   * @param emojipiker.event 
   */
  addEmoji(event){
    
    this.textoTextField=this.textoTextField+event.emoji.native;
 
  }


  /**
   * @function recive the image and the post type to post it
   * @param inputFile 
   * @param tipo_posteo 
   */
  post(inputFile,tipo_posteo){
    this.checkPost()
    if(this.postCheckBool){
      alert('Completa adecuadamente los campos.');
      return;
    }
    
    if(tipo_posteo == 1 && this.authS.getUser().role_id != 1){
      alert('No cuenta con los permisos necesarios.');
      return;
    }
   
    this.face_sdk_service.getLoginFacebook("pages_show_list,pages_manage_posts,pages_manage_engagement,pages_read_user_content,pages_read_engagement,pages_manage_metadata,pages_manage_ads")
    .then(res => {
    

      if(res.authResponse == undefined){
       
      }
      else{

        //consulto las paginas del usuario
        this.face_sdk_service.getClientPages(res.authResponse.accessToken)
        .then(
          res=>{
              
            this.fileSelected=inputFile;
            this.createUserPageUsageValidationList(res.data, tipo_posteo);
            
            
          }
          
        )
      }
    })
  }


  /** create a list of pages that user can use to post, the information from facebook can be dificult to filter,
   * the user can use this list to manually filter te pages that it want to use
   * 
   * @param list 
   */

  createUserPageUsageValidationList(list:Array<any>, tipo_posteo:number){
    
    if(list.length ==0){
      alert("No se encontró permisos.");
    }else{
      list.forEach(element => {
        element["selected"]=false;
        element["tipo_posteo"]=tipo_posteo;
        this.listPageValidation.push(element);
      });
     
      this.pageListValidationShow = true;

    }
  }

  /**post only on pages that user manually allow to use
   * 
   */
  checkPagesValidationListPost(){
   
    
    const array:any = this.listPageValidation;
    for(let i=0; i<array.length; i++){
      
      
      if(array[i].selected){

        
        //if the page selected exist
        if(this.socialDB.searchPage(array[i].id)){
          

          let pageTemp = this.socialDB.getPageObject(this.socialDB.getPageID(array[i].id));

          //if actual user is admin
          if(this.userS.actualUser.role_id == 1){
            if(pageTemp.is_Active == false){
              alert(`La página ${pageTemp.name} esta deshabilitada en el modulo social.`);
            }else{
              this.face_sdk_service.postFacebook(array[i],array[i].tipo_posteo,this.textoTextField,this.fileSelected,this.updateDateSelected);
            }
            
          }else{
            //if the actual user is NO admin user, then if it has permission on this page
          if(this.socialDB.checkUserPagePermissions(array[i].id)){
            this.face_sdk_service.postFacebook(array[i],array[i].tipo_posteo,this.textoTextField,this.fileSelected,this.updateDateSelected);

          }else{
            alert(`Usted no posee permisos sobre la página: ${array[i].name}, favor comunicarse con los administradores.`)
          }
          }

         
        }else{
          alert(`La página ${array[i].name} no existe en la aplicación, comunícate con los administradores.`)
        }
        
      }
      
    }
    
    this.closePageSelection();
  }

  closePageSelection(){
    this.listPageValidation = [];        //clear page list
    this.pageListValidationShow = false; //hide page selector
  }



  /**
   * 
   * @function get the date selected by the user
   * @param event
   */
  getUpdateDate(event){
    //const dateCheck = event.value.toString().split(" ", 4);
    const dateCheck = event.value.toString().split(" ", 4)
    const date = new Date();  

    switch (dateCheck[1]) {
      case 'Jan':
        dateCheck[1] = 0;
        break;
    
      case 'Feb':
        dateCheck[1] = 1;
        break;  

      case 'Mar':
        dateCheck[1] = 2;
        break;

      case 'Apr':
        dateCheck[1] = 3;
        break;

      case 'May':
        dateCheck[1] = 4;
        break;  

      case 'Jun':
        dateCheck[1] = 5;
        break;

      case 'Jul':
        dateCheck[1] = 6;
        break;

      case 'Aug':
        dateCheck[1] = 7;
        break;        

      case 'Sep':
        dateCheck[1] = 8;
        break;

      case 'Oct':
        dateCheck[1] = 9;
        break;

      case 'Nov':
        dateCheck[1] = 10;
        break;

      case 'Dec':
        dateCheck[1] = 11;
        break;

      default:
        break;
    }


    if(date.getFullYear() > dateCheck[3]){
      alert('Establece una fecha válida.');
      this.updateDateSelected = null;
      return
    }
    if(date.getFullYear() == dateCheck[3] && date.getMonth() > dateCheck[1]){
      alert('Establece una fecha válida.');
      this.updateDateSelected = null;
      return
    }
    if(date.getFullYear() == dateCheck[3] && date.getMonth() == dateCheck[1] && date.getDate() > dateCheck[2]){
      alert('Establece una fecha válida.');
      this.updateDateSelected = null;
      return
    }


    this.updateDateSelected = dateCheck;
    this.checkPost()
  }



  /**
   * @function checkPost
   */
  checkPost(){
    
    if(this.textoTextField =='' || this.updateDateSelected == null || this.imageSelectecCheck ==false || this.imagenPostPreview == false){
      this.postCheckBool = true;//no se acepta
    }else{
      this.postCheckBool = false;
    }
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreatePostComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }


}

@Component({
  selector: 'help-create-post',
  templateUrl: 'help-create-post.html',
})
export class CreatePostComponentDialog {}