import { Component, OnInit } from '@angular/core';
import { SocialDatabaseService } from "../social-services/social-database.service";
import { FacebSdkService } from "../social-services/faceb-sdk.service";
import { Page } from "../social-models/Page";
import { Post } from "../social-models/Post";
import { User } from "../../users/models/User.class";
import { AuthService } from "../../general-services/auth.service";
import { Subscription } from 'rxjs';
import { UserService } from "../../users/services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { async } from '@angular/core/testing';
import {PageEvent} from '@angular/material/paginator';
import { retry } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  watchPostDisplay : boolean = false  ;

  postList: any = [];//list of post objects to show

  // MatPaginator Output
  pageEvent: PageEvent;

  postListIndex: number = 0;
  postListPageZise:number = 5 ;

   //DIV pageValidation
  //contain the list of pages that user can use, get from facebook
  listPageValidation: Array<any> = [];
  pageListValidationShow:boolean = false;


  //pending post selected to post
  pendingPostS:any = null;

  //target method when user select a page
  targetMethod:boolean = false;

  //solo puedo tener las reacciones SOLO SI los metadatos se recuperan
  postview_selectec : object ;

  constructor(public dialog: MatDialog, private authS : AuthService,private socialDB: SocialDatabaseService, private sdkFacebook: FacebSdkService, private userManagmentService: UserService, public commonService: CommonService  ) { }
  
  private subscription: Subscription;
  private subscriptionPostsCount: Subscription;
  private subscriptionPosts: Subscription;
  private subscriptionDeletePost: Subscription;

  //paginator
  paginatorPostListIndex: number = 0;
  paginatorPostsPageZise:number = 5;
   

  ngOnInit() {
    this.loadData();//call to backend info
   
  }


  /** load data from backend
   * 
   */
  loadData(){

    //get post count
    this.subscriptionPostsCount = this.socialDB.getPostCount(this.userManagmentService.actualUser.user_id)
    .subscribe({
      next: (data:any)=>{
        
        this.socialDB.postsCount = data[0].get_posts_by_user_count;

        this.subscriptionPostsCount.unsubscribe();
      }, error : (err:HttpErrorResponse)=> this.commonService.openSnackBar(`ERROR ${err}`,"OK")
    })


    //jalar usuarios
    this.subscription = this.userManagmentService.getAllUser()
    .subscribe({
      next: (data: any) => {
        this.userManagmentService.users = data.data;
        this.subscription.unsubscribe();
        
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });

  

    //get the posts
    this.getPostsPaginator();
  }

  /**
   * 
   */
  getPostsPaginator(){
    //getPostsBasedOnPaginator
    
    
    this.subscriptionPosts = this.socialDB.getAllPosts(this.userManagmentService.actualUser.user_id,this.paginatorPostsPageZise,this.paginatorPostListIndex)
    .subscribe({
      next: (data:any)=>{
        

        this.socialDB.posts = [];

        data.forEach(element => {
          this.socialDB.posts.push(element.get_posts_by_user);
        });

        
        

        this.subscriptionPosts.unsubscribe();
      },error:(err:HttpErrorResponse)=> this.commonService.openSnackBar(`ERROR ${err}`,"OK")
    })
  }


  /** delete a pending post (Admins only)
   * 
   * @param event 
   */
  deletePendingPostService(element){

    const user = this.userManagmentService.actualUser;
    if(user.role_id != 1){
      alert("Operación solo para administradores.");
    }else{

      let post_id = element;
      
      
      this.subscriptionDeletePost = this.socialDB.deletePendingPost(post_id)
      .subscribe(
        {
          next:(data:any)=>{

            if(data[0].delete_post != 1){
              this.commonService.openSnackBar("ERROR fallo al eliminar","OK");
            }else{
              this.commonService.openSnackBar("Eliminado","OK");
              this.loadData();//call to backend info
            }

            this.subscriptionDeletePost.unsubscribe();
          },error:(err:HttpErrorResponse)=>this.commonService.openSnackBar(`ERROR ${err}`,"OK")
        }
      )

    }

    

  }

    /** load event on paginator clicks
   * 
   * @param paginator 
   */
  loadPaginatorChanges(paginator){
    this.paginatorPostsPageZise = paginator.pageSize;
    this.paginatorPostListIndex = paginator.pageIndex;
  
    this.getPostsPaginator();
    
  }

  /** return the user object
   * 
   * @param user_id 
   */
  getUserObject(user_id){

    for (let index = 0; index < this.userManagmentService.users.length; index++) {
      
      if(this.userManagmentService.users[index].user_id == user_id){
        
        return this.userManagmentService.users[index];
      }
      
    }
    return null;
  }

  getPostDateSplit(date:string){
    return date.split("T");
  }




  closePageSelect(){
    this.pendingPostS = null;
    this.listPageValidation = [];
    this.pageListValidationShow = false;
  }

  /** to post a pending post
   * 
   * @param event 
   */
  pendingPostAccepted(element){

    this.pendingPostS = null;
    this.listPageValidation = [];

    this.targetMethod = true;
   

    const user = this.userManagmentService.actualUser;
   

    if(user.role_id != 1){
      alert("Operación solo para administradores.");
    }else{

      
      let idSelectecPost = element;

      //search facebook page id
      let id_post:string;
      let id_db;
      for(let i=0 ; i < this.socialDB.posts.length ; i++){
        if(this.socialDB.posts[i].post_id == idSelectecPost){
          id_post = this.socialDB.posts[i].post_id_FB;
          id_db = this.socialDB.posts[i].post_id;
        }
      }
      
      
      this.sdkFacebook.getLoginFacebook("pages_show_list,pages_manage_posts,pages_manage_engagement,pages_read_user_content,pages_read_engagement,pages_manage_metadata,pages_manage_ads") //, publish_pages
      .then(
        response=>{
         
          
          if(response.authResponse == undefined){
            
            return;
          }
          
          try {
            if(response.authResponse.accessToken != null){
              //consulto las paginas del usuario
              this.sdkFacebook.getClientPages(response.authResponse.accessToken )
              .then(
                res=>{
                  
  
                  if(res.data != undefined && res.data != null){
                    this.createUserPageUsageValidationList(res.data,id_post,id_db);
                  }else{
                    this.commonService.openSnackBar(`Error con la obtencion de paginas`,"OK");
                  }
                  
              });
            }else{
              this.commonService.openSnackBar(`Error con el login de Facebook`,"OK");
            }
          } catch (error) {
            this.commonService.openSnackBar(`Error ${error}`,"OK");
          }
          
              
          }
          

      )
      .catch(
        err=>{
          this.commonService.openSnackBar(`Error ${err}`,"OK");
        }
      )
    }
    
    
    
  }
  

   /** create a list of pages that user can use to post, the information from facebook can be dificult to filter,
   * the user can use this list to manually filter te pages that it want to use
   * 
   * @param list 
   */

  //the user can select only one page
  createUserPageUsageValidationList(list:Array<any>,id_post_FB, id_post_db){
    
    if(list.length ==0){
      alert("No has otorgado permisos.");
    }else{
      list.forEach(element => {
        element["selected"]=false;
        element["post_FB"]=id_post_FB;
        element["id_post_db"]=id_post_db;
        this.listPageValidation.push(element);
      });
      
      this.pageListValidationShow = true;

    }
  }




  /**post only on pages that user manually allow to use
   * 
   */
  //AQUI
  postPendingPostSelected(){

    const array:any = this.listPageValidation;

    if(this.pendingPostS.id != null){
      

      //check page selection
      let postObj = this.socialDB.getPostObject(this.pendingPostS.id_post_db);
      
      let pageObj = this.socialDB.getPageObject(postObj.website_id);
      if(pageObj.website_id_FB != this.pendingPostS.id){
        this.closePageSelect();
        alert("Selecciona la página correcta.");
        return;
      }
      
        //if the page selected exist
        if(this.socialDB.searchPage(this.pendingPostS.id)){


          //if actual user is admin
          if(this.userManagmentService.actualUser.role_id == 1){
            

            if( this.pendingPostS.access_token != null && this.pendingPostS.post_FB != null){
              this.sdkFacebook.publishPendingPost(this.pendingPostS.access_token, this.pendingPostS.post_FB)
            .then(
              response =>{
               

                if(response.success == true && response.success != undefined){

                  this.socialDB.publishPendingPost(this.pendingPostS.id_post_db)
                  .subscribe({
                    next: (data2:any) =>{
                      
                      
                      if(data2[0].change_post_publication_state == 1){
                        this.commonService.openSnackBar(`Publicacion realizada`,"OK");
                      }else{
                        this.commonService.openSnackBar(`ERROR inserción a base de datos fallida`,"OK")
                      }

                      this.loadData();
                      
                    }, error: (err:HttpErrorResponse) => this.commonService.openSnackBar(`ERROR ${err}`,"OK")
                  })
                }else{
                  this.commonService.openSnackBar(`ERROR publicacion fallida`,"OK");
                } 
            });
            }else{
              this.commonService.openSnackBar("Error faltan parametros","OK");
            }
            

          }else{
            
          if(this.socialDB.checkUserPagePermissions(this.pendingPostS.id)){
            

            
            alert(`Usted no posee permisos sobre la página: ${this.pendingPostS.name}, función solo para administradores.`)

          }
          }

        }else{
          alert(`La página ${this.pendingPostS.name} no existe en la aplicación, comunícate con los administradores.`)
        }
    }else{
      alert("Formato erróneo.");
    }


    this.listPageValidation = [];        //clear page list
    this.pageListValidationShow = false; //hide page selector
  }


  /** get the post selected in view
   * 
   * @param event //to get parent id = id_post
   */
  getPostViewData(element){

    //this.hidePostSelected()//erase old object and hide view
    this.watchPostDisplay =false;


    


    let idSelectecPost =element;

    //try to find the post
    
    for(let i = 0; i < this.socialDB.posts.length; i++){
      if(this.socialDB.posts[i].post_id == idSelectecPost){
        

        if(this.socialDB.posts[i].user_id != this.authS.getUser().user_id && this.authS.getUser().role_id != 1){
          alert("Solo puedes ver los post que tu publicaste.");
          break;
        }

        //get the user permission to manage pages using facebook 
                                          //manage_pages
        this.sdkFacebook.getLoginFacebook("pages_manage_engagement,pages_manage_posts,pages_show_list")
        .then(
          response =>{


            
           
            if(response.authResponse == undefined){
              
              return;
            }
            
            
            this.sdkFacebook.getFromFacebookAPI(response.authResponse.accessToken, this.socialDB.posts[i].post_id_FB)
            .then(
              response =>{

                this.createPostSelectecInfo(idSelectecPost,response.full_picture,response.message)
                

              }
            )
            .catch(
              err=>{
                alert('No se otorgaron permisos.')
               
              }
            )

          }
        )
        .catch(
          (err)=>{
            
          }
        )
        
        
        break;
      }
    }
  }


  /** create object post to show with the info from facebook, 'ver post' button
   * 
   * @param idPost      //id of the post
   * @param postImgLink //url from post image from facebook database
   * @param postText    //text of the post from facebook database
   */
  createPostSelectecInfo(idPost,postImgLink,postText){

    
    let postSelectedObject: any;
    let pageSelectedPost: Page;
    let userSelectecPost: any;

    //serch in posts
    for(let i = 0 ; i<this.socialDB.posts.length ; i++){
      if(this.socialDB.posts[i].post_id == idPost){
        postSelectedObject = this.socialDB.posts[i];
        break
      }
    }
    //serch in pages
    
    for(let i = 0 ; i<this.socialDB.pages.length ; i++){
      if(this.socialDB.pages[i].website_id == postSelectedObject.website_id){
        pageSelectedPost = this.socialDB.pages[i];
        break
      }
    }
    
    //serch in users
    
    for(let i = 0 ; i<this.userManagmentService.users.length ; i++){
      if(this.userManagmentService.users[i].user_id == postSelectedObject.user_id){
        userSelectecPost = this.userManagmentService.users[i];
        break
      }
    }
    let userRole = 'Empresario';
    if(userSelectecPost.role_id == 1){
      userRole = 'Administrador';
    }

    let deletePost = 'No eliminado';
    if(postSelectedObject.is_active){
      deletePost = 'Eliminado'
    }

    let postedPost = 'Pendiente'
    if(postSelectedObject.is_posted){
      postedPost = 'Posteado'
    }

    let dateTest = postSelectedObject.creation_date.split("T08:")
    
    
    this.postview_selectec = {
      idpost: postSelectedObject.post_id,
      userName: userSelectecPost.info.name + " " + userSelectecPost.info.lastName,
      userEmail: userSelectecPost.info.email,
      deletePost: deletePost,
      postedPost: postedPost,
      userRole: userRole,
      pageName: pageSelectedPost.name,
      creationDate: dateTest[0],
      publicationDate: postSelectedObject.publication_date,
      getDataDate: postSelectedObject.update_date,
      imgSrc: postImgLink,
      postTxt: postText,
      love_count: postSelectedObject.love_count,
      haha_count: postSelectedObject.haha_count,
      sad_count: postSelectedObject.sad_count,
      like_count: postSelectedObject.like_count,
      angry_count: postSelectedObject.angry_count,
      wow_count: postSelectedObject.wow_count
    }

  
    
    this.watchPostDisplay = true;

  }


  /** hide post view, destroy object post from facebook
   * 
   */
  hidePostSelected(){
    this.watchPostDisplay = !this.watchPostDisplay;
    this.postview_selectec = {};
   
  }


  /**
   * 
   * @param element 
   */
  getFacebookFeedback(element){
  
    this.targetMethod = false;

    const user = this.userManagmentService.actualUser;
    if(user.role_id != 1){
      alert("Operación solo para administradores.");
    }else{

    
      let idSelectecPost = element;

      //search facebook page id
      let id_post:string;
      let id_db;
      for(let i=0 ; i < this.socialDB.posts.length ; i++){
        if(this.socialDB.posts[i].post_id == idSelectecPost){
          id_post = this.socialDB.posts[i].post_id_FB;
          id_db = this.socialDB.posts[i].post_id;
        }
      }
      if(id_post == null){
        alert("Id de post no encontrado en los datos.");
        return;
      }
     
      
      this.sdkFacebook.getLoginFacebook("pages_show_list,pages_manage_posts,pages_manage_engagement,pages_read_user_content,pages_read_engagement,pages_manage_metadata,pages_manage_ads") //, publish_pages
      .then(
        response=>{
        
          if(response.authResponse == undefined){
           
            return;
          }
        
         
     
          try {
            if (response.authResponse.accessToken != null) {
              //consulto las paginas del usuario
              this.sdkFacebook.getClientPages(response.authResponse.accessToken )
              .then(
                res=>{
               

                  if(res.data != undefined && res.data != null){
                    this.createUserPageUsageValidationList(res.data,id_post,id_db);
                  }else{
                    this.commonService.openSnackBar("ERROR obtencion de paginas","OK");
                  }
  
                  
              });
            }else{
              this.commonService.openSnackBar("ERROR login con Facebook","OK");
            }
          } catch (error) {
            this.commonService.openSnackBar(`Error  ${error}`,"OK");
          }
            
            
            
          }
            
          

      )
      .catch(
        err=>{
        
          this.commonService.openSnackBar(`Error ${err}`,"OK");
        }
      )
    }
  }


  /**
   * 
   */
  getLikesCommentsFacebook(){



   
    const array:any = this.listPageValidation;

    if(this.pendingPostS.id != null){
      
      let postObj = this.socialDB.getPostObject(this.pendingPostS.id_post_db);

      let pageObj = this.socialDB.getPageObject(postObj.website_id);

      if(pageObj.website_id_FB != this.pendingPostS.id){
        this.closePageSelect();
        alert("Selecciona la página correcta.");
        
        return;
      }

        //if the page selected exist
        if(this.socialDB.searchPage(this.pendingPostS.id)){


          //if actual user is admin
          if(this.userManagmentService.actualUser.role_id == 1){
         

            if (this.pendingPostS.access_token != null && this.pendingPostS.post_FB != null) {
              this.sdkFacebook.getPostReactionsFacebook(this.pendingPostS.access_token, this.pendingPostS.post_FB)
            .then(
              response =>{
             

                if(response.id != null){
                  //insertar a base de datos

                  if(postObj != null){
                    this.socialDB.savePostFeedback(postObj,response).subscribe({
                      next: (data:any)=>{
                      

                        if(data[0].change_post_json == 1){
                          this.commonService.openSnackBar("Almacenado correctamente! 😄","OK");
                        }else{
                          this.commonService.openSnackBar("ERROR al almacenar en base de datos 😔","OK");
                        }
                        this.loadData();

                      },error:(err:HttpErrorResponse)=> this.commonService.openSnackBar(`ERROR ${err}`, "OK")
                    });


                  }else{
                    this.commonService.openSnackBar(`ERROR al obtener objeto post`,"OK");
                  }
                  
                  

                }else{
                  this.commonService.openSnackBar(`ERROR obtencion fallida`,"OK");
                }
            });
            }
            

          }else{
           
            alert(`Usted no posee permisos sobre la página: ${this.pendingPostS.name}, función solo para administradores.`)
          
          }

        }else{
          alert(`La página ${this.pendingPostS.name} no existe en la aplicación, comunícate con los administradores.`)
        }
    }else{
      alert("Formato erróneo.");
  }
  
  this.listPageValidation = [];        //clear page list
  this.pageListValidationShow = false; //hide page selector
}

openDialog() {
  const dialogRef = this.dialog.open(ListPostComponentDialog);

  dialogRef.afterClosed().subscribe(result => {
    
  });
}

}


@Component({
  selector: 'help-list-post',
  templateUrl: 'help-list-post.html',
})
export class ListPostComponentDialog {}
