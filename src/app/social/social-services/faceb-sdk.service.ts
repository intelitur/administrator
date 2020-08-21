import { Injectable } from '@angular/core';

//importo la libreria para usar la api de facebook
import * as Facebook from 'fb-sdk-wrapper';
import { SocialDatabaseService } from "./social-database.service";
import { AuthService } from "../../general-services/auth.service";
import { UserService } from "../../users/services/user.service";
import { CommonService } from "../../general-services/common.service";
import { Subscription } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';




/*
  Facebook parece tener recelo con google asi que solo provee skd para el framework the react,
  la libreria que encontre, realizada por terceros, parece que ha adaptado el sdk para javascript vanilla
  para ser usado en angular.
  PD: debido a esto todo el codigo del prototipo realizado en php y javascript vanilla debio ser desechado
*/

@Injectable({
  providedIn: 'root'
})
export class FacebSdkService {

  private subscriptionPost:Subscription;
  private subscriptionPosts:Subscription;
  private subscriptionPostsCount:Subscription

  constructor(private socialDataBase:SocialDatabaseService
    , private  authS : AuthService,
    private userS : UserService,
    public commonS:CommonService) {
    //inicializo la app
    Facebook.load()
    .then(() => {
      Facebook.init({
        appId: 2309239552738947
      });
    });
   }


   /** generic facebook login generator
    * 
    * @param scope 
    */
  getLoginFacebook(scope :string){

    
    let valor;
    
    return valor  = Facebook.login({
      scope: scope,
      return_scopes: true
    })
    .then( (response) => {
      if (response.status === 'connected') {
        // logged in
       
        return response;//retorna la respuesta de facebook
      } else {
        // not logged in
        return 'error';
        
      }
    });


  }

  /** to get all the pages of the user
   * 
   * @param accessToken 
   */
  getUserAccounts(accessToken:string){
    let pages_permission;  
    return pages_permission = Facebook.api("/me/accounts",'get', {
      access_token: accessToken
    })
    .then(
      response=>{
        return response;
      }
    )
  }

  /** to post a pending post using facebook api
   * 
   * @param access_tok 
   * @param id_post 
   */
  publishPendingPost(access_tok :string, id_post: string){
    let post_info;

    return post_info = Facebook.api('/'+id_post,'post',{
      is_published: 'true',
      access_token: access_tok
    })
    .then(
      (response)=>{
        return response;
      })
  }


  /** get post info from facebook
   * 
   * @param access_token 
   * @param id_post 
   */
  getFromFacebookAPI(access_token, id_post){

    
    let postInfo;

    return postInfo = Facebook.api('/'+id_post, 'get', {

      fields: "full_picture,message",
      access_token: access_token
    })
    .then((response)=>{
      return response;
    })
    
  }


  /** get all reaction 
   * 
   * @param accessToken 
   * @param postid 
   */
  getPostReactionsFacebook(accessToken,postid){
    let valor;
    return valor = Facebook.api(
    "/" + postid + "/",
    "GET",
    {
      fields:
        "reactions.type(LIKE).limit(0).summary(1).as(like),reactions.type(WOW).limit(0).summary(1).as(wow),reactions.type(SAD).limit(0).summary(1).as(sad),reactions.type(LOVE).limit(0).summary(1).as(love),reactions.type(HAHA).limit(0).summary(1).as(haha),reactions.type(ANGRY).limit(0).summary(1).as(angry)",
      access_token: accessToken
    },
    function(response) {
      
      var like_count = response.like.summary.total_count;
      var love_count = response.love.summary.total_count;
      var wow_count = response.wow.summary.total_count;
      var haha_count = response.haha.summary.total_count;
      var sad_count = response.sad.summary.total_count;
      var angry_count = response.angry.summary.total_count;

      

      return response;

    });
     
  }
  //SI SE DESEAN OBTENER COMENTARIOS ESTA ES LA CONSULTA se usa con los mismos parametros que la consulta de obtener (getPostReactionsFacebook)
  getPostCommentsFacebook(postid, accessToken, idPostBD){
    /**
     * FB.api(
    "/" + postid + "/comments",
    "GET",
    { fields: "message", access_token: AccesToken },
    function(response) {
      // Insert your code here
      console.log("Respuesta a los comentarios: limitada");
      console.log();
      console.log("");


    }
  );
     */

  }

 
   //OBSOLETO por culpa de faceboook
  //obtengo el permiso para ver poder obtener y manejar paginas
  getClientAcsTokenManagePagesPublishPages(){
    // Login + get authorisation for additional scopes
    let valor

    return valor  = Facebook.login({
      scope: "manage_pages, publish_pages",
      return_scopes: true
    })
    .then( (response) => {
      if (response.status === 'connected') {
        // logged in
     
        return response;//retorna la respuesta de facebook
      } else {
        // not logged in
        return 'error';
        
      }
    });

    
  }


  //obtengo las paginas del cliente NECESITA un access token
  getClientPages(clientAccessToken){
    let valor
                                ///me/accounts
    return valor = Facebook.api('/me/accounts',
    'get',
    {access_token: clientAccessToken })
    .then((response) => {
      // data's here!
      return response;
    });

  }


/**
 * 
 * @param data //objeto con la info de facebook con los access token
 * @param tipo_posteo //admin o pendiente
 * @param texto_publicacion //el contenido de la publicacion
 * @param files //la imagen a subir
 * @param fechaMetadatos //fecha establecida para recoger los metadatos
 */
  postFacebook(data, tipo_posteo, texto_publicacion, files,fechaMetadatos){

    
    //para una unica imagen actualmente
    let imagen = files.files[0];

    let fileReader = new FileReader();
    
    try {
      fileReader.onloadend = async () => {
        let photoData = new Blob([fileReader.result], { type: "image/jpeg" });
        let formData = new FormData();
        let pageId = data.id;//id de la pagina
  


        
        if(this.userS.actualUser.role_id != 1){
          if(tipo_posteo == 1)
          {
           
            alert("Usuario NO administrador para posteo de tipo administrador: RECHAZADO");
            return;
          }else{

            if(!this.socialDataBase.getUserPostPermisions(data.id)){
              alert(`El usuario no tiene permisos para postear en:  ${data.name}`)
              return;
              
            }
            
          }
        
        }else{
          
        }

        
        

        //si es un posteo pendiente
        if(tipo_posteo==2){
           //si es un posteo pendiente agrego el elemento que me permite hacerlo
           formData.append("published", "false");
           
        }
  
        
        formData.append("access_token", data.access_token);
        formData.append("source", photoData);//imagen a postear
        formData.append("message", texto_publicacion);
  
        let response = <any> await fetch(
          `https://graph.facebook.com/${pageId}/photos`,
          {
            body: formData,
            method: "post"
          }
        );
        
        if (response == null) {
       
          this.commonS.openSnackBar("ERROR al postear","OK");
          return;
        }
        response = await response.json();
       
  
        
        if(response.post_id == '' || response.error != null){
          
          alert("Intenta mas tarde: ERROR")
          
        }else {

          if(tipo_posteo==1){ 
            //admin post only for admins

            this.subscriptionPost = this.socialDataBase.savePost(response,fechaMetadatos,data.id,1)
            .subscribe(
              {
                next:(data:any)=>{
                 

                  if(data[0].create_post == 1){
                    this.commonS.openSnackBar("Almacenado correctamente! 😄","OK");
                  }else{
                    this.commonS.openSnackBar("ERROR al almacenar en base de datos 😔","OK");
                  }


                   //get post list, post count
                   this.subscriptionPostsCount = this.socialDataBase.getPostCount(this.userS.actualUser.user_id)
                   .subscribe({
                     next: (data:any)=>{
                       
                       this.socialDataBase.postsCount = data[0].get_posts_by_user_count;
 
                       this.subscriptionPostsCount.unsubscribe();
                     }, error : (err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`,"OK")
                   })

                  //update post list, posts
                  this.subscriptionPosts = this.socialDataBase.getAllPosts(this.userS.actualUser.user_id,5,0)
                  .subscribe({
                    next: (data:any)=>{
                      

                      this.socialDataBase.posts = [];

                      data.forEach(element => {
                        this.socialDataBase.posts.push(element.get_posts_by_user);
                      });
                     

                      this.subscriptionPosts.unsubscribe();
                      },error:(err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`,"OK")
                      })

                  this.subscriptionPost.unsubscribe();
                }, error: (err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`, "OK")
              }
            )

          }else{ 
            // general post for all users

            this.subscriptionPost = this.socialDataBase.savePost(response,fechaMetadatos,data.id,2)
            .subscribe(
              {
                next:(data:any)=>{
                 
                  
                  if(data[0].create_post == 1){
                    this.commonS.openSnackBar("Almacenado correctamente! 😄","OK");
                  }else{
                    this.commonS.openSnackBar("ERROR al almacenar en base de datos 😔","OK");
                  }

                  //get post list, post count
                  this.subscriptionPostsCount = this.socialDataBase.getPostCount(this.userS.actualUser.user_id)
                  .subscribe({
                    next: (data:any)=>{
                      
                      this.socialDataBase.postsCount = data[0].get_posts_by_user_count;

                      this.subscriptionPostsCount.unsubscribe();
                    }, error : (err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`,"OK")
                  })

                  //update post list, posts
                  this.subscriptionPosts = this.socialDataBase.getAllPosts(this.userS.actualUser.user_id,5,0)
                  .subscribe({
                    next: (data:any)=>{
                      

                      this.socialDataBase.posts = [];

                      data.forEach(element => {
                        this.socialDataBase.posts.push(element.get_posts_by_user);
                      });
                      

                      this.subscriptionPosts.unsubscribe();
                      },error:(err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`,"OK")
                      })

                  this.subscriptionPost.unsubscribe();
                }, error: (err:HttpErrorResponse)=> this.commonS.openSnackBar(`ERROR ${err}`, "OK")
              }
            )
            
          }
        }

    
        
    
      };
      fileReader.readAsArrayBuffer(imagen);
   
    } catch (error) {
      
      alert("Selecciona una imagen");
    }
  }


}
