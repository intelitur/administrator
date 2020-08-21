import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, Subscription } from 'rxjs';
import { Post } from "../social-models/Post";
import { Page } from "../social-models/Page";
import { Permission } from "../social-models/Permission";
import { AuthService } from "../../general-services/auth.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocialDatabaseService {

  //posteos
  posts: Array<Post> = null;
  pages: Array<Page> = null;
  permissionsActualUser:Array<Permission> = null;
  permissions: Array<Permission> = null;

  permissionsCount:number;
  postsCount:number;

  updateListPost: boolean = false;

  constructor(
    private http: HttpClient, 
    private authS: AuthService
    ) { }

    

    getActualUserPermissions(user_id){
      let param = new HttpParams().set("user_id",user_id);
      return this.http.get(`${environment.SERVER_BASE_URL}social/getActualUserPermissions`,{params:param})

    }


    changePageState(page_id:number,state:boolean){
      return this.http.post(`${environment.SERVER_BASE_URL}social/changePageState`,{page_id:page_id, state:state});
    }

    /**
     * 
     * @param permission_id 
     * @param newState 
     */
    changePermissionState(permission_id:number,newState:boolean){

      return this.http.post(`${environment.SERVER_BASE_URL}social/changePermissionState`,{permission_id:permission_id,newState:newState});

    }

    /** create new permission for a page
     * 
     * @param user_id 
     * @param website_id 
     */
  createPermission(user_id:number, website_id){
   
    return this.http.post(`${environment.SERVER_BASE_URL}social/createPermission`,{user_id:user_id, website_id:website_id});

  }

    /**return true if that page exist in the pages list
     * 
     * @param pagina_id //id provided from facebook example: 213123231231
     */
  searchPage(pagina_id:string){
    
    for(let i = 0 ; i<this.pages.length ; i++){
      if(this.pages[i].website_id_FB == pagina_id){
        return true;
      }
    }
    return false;

  }


  /**
   * get the total number of permission
   */
  getPermissionCount(){

    return this.http.get(`${environment.SERVER_BASE_URL}social/getPermissionCount`);

  }

  /**
   * get the total number of post
   */
  getPostCount(user_id:number){
    return this.http.post(`${environment.SERVER_BASE_URL}social/getPostCount`,{user_id:user_id});

  }

  /** get permissions whit pagination
   * 
   * @param page_index 
   * @param page_size 
   */
  getPermissionPaginator(page_index:number, page_size:number){

    return this.http.post(`${environment.SERVER_BASE_URL}social/getAllPemissions`,{page_size:page_size, page_index:page_index})

  }



  /**check if the actual user has permission on 
   * 
   * @param pageID_FB 
   **/
  checkUserPagePermissions(pagina_id :string){

    for(let i = 0 ; i<this.pages.length ; i++){
      if(this.pages[i].website_id_FB == pagina_id){
        let page = this.pages[i];
        
        for (let index = 0; index < this.permissionsActualUser.length; index++) {
          if(this.permissionsActualUser[index].website_id == page.website_id){

            if(this.permissionsActualUser[index].is_active == true){
            
              return true;
            }else{
              return false;
            }
            

          }
          
        }
      }
    }
    return false;

  }


  /** return page object 
   * 
   * @param page_id 
   */
  getPageObject(page_id){

    for(let i = 0 ; i<this.pages.length ; i++){
      if(this.pages[i].website_id == page_id){
        return this.pages[i];
      }
    }
    return null;
  }


  /**
   * 
   * @param page_id 
   */
  
  getUserPostPermisions(page_id){
    //consulto permisos del usuario actual con esta pagina en la lista, de tenerlos retorno true
    return true;
  }



  /**
   * 
   * @param post //info de facebook del post
   * @param fechaMetadatos //fecha para obtener metadatos
   */ 
  savePost(post, fechaMetadatos,idPage,typePost){

    const today = new Date();
    
    let publication_date = "";

    let post_FB_id:string;//if post is pending post, Facebook will not generate a FB_post_id, you need to create it yourself

    const updateDate = fechaMetadatos[3]+'-'+(fechaMetadatos[1]+1)+'-'+fechaMetadatos[2];

    let page_id =this.getPageID(idPage);

    let is_posted:boolean;
    if(typePost == 1){//admin post
      is_posted = true
      publication_date = today.getFullYear()+ "-" + (today.getMonth()+1) + "-"+ today.getDate();;
      post_FB_id = post.post_id; //if is admin post Facebook give you a FB_post_id
    }else{
      is_posted = false;
      post_FB_id = idPage+"_"+post.id;
    }


 

    
    const publication = {
      post_id: post_FB_id,
      website_id: page_id,
      user: this.authS.getUser().user_id,
      publication_date: publication_date,
      update_date: updateDate,
      is_active: false, //por defecto false, is_active = post pendiente eliminado eliminado
      is_posted: is_posted ,//true si es admin false si es posteo pendiente
                      //los contadores de reaccion por defecto cero al crear
      like_count: 0,
      haha_count: 0,
      love_count: 0,
      sad_count: 0,
      angry_count: 0,
      wow_count: 0
    }

  
    return this.http.post(`${environment.SERVER_BASE_URL}social/saveNewPost`, {FB_id:publication.post_id, website_id:publication.website_id, publication_date: publication.publication_date, update_date: publication.update_date, published:publication.is_posted, user_id: publication.user});
    
  

  }

  /** get the app id from facebook provided page id
   * 
   * @param FB_website_id 
   */
  getPageID(FB_website_id){
    for(let i = 0 ; i<this.pages.length ; i++){
      if(this.pages[i].website_id_FB == FB_website_id){

        return this.pages[i].website_id;
      }
    }
    return -1;

  }


  /** creaate new facebook page
   * 
   * @param website_id  //the id provided from facebook
   * @param name        //name of page provided by facebook
   * @param platform    //1 means if facebook page
   * @param is_active   //if we can use the page
   */
  createNewFacebookPage(pageName:string, page_id:string){
    //website_id: string, name:string, platform:number, is_active:number
    const f_page ={
      website_id: page_id,
      name: pageName,
      platform: 1,
      is_active: 1
    }

    return  this.http.post(`${environment.SERVER_BASE_URL}social/createFacebookPage`,f_page);

  }



  /** delete a pending post (Admins only)
   * 
   * @param post_id 
   */
  deletePendingPost(post_id){

    let params = new HttpParams();
    params = params.append("post_id",post_id);
    return <any> this.http.delete(`${environment.SERVER_BASE_URL}social/deletePendingPost`,{params:params})
  }

  /**obtiene las paginas 
   * 
   */
  getAllPages(){

    return <any> this.http.get(`${environment.SERVER_BASE_URL}social/getAllPages`);

  }


 /** get the post based on the actual user
  * 
  * @param user_id 
  */
  getAllPosts(user_id,page_size,page_index){
    //SI ES ADMIN O SI ES EMPRESARIO CAMBIA LA CONSULTA
    return this.http.post(`${environment.SERVER_BASE_URL}social/getPosts`,{user_id:user_id, page_size:page_size, page_index:page_index})
  }

  
  /** change the post state when a pending post id posted
   * 
   * @param post_id 
   */
  publishPendingPost(post_id){
    return this.http.post(`${environment.SERVER_BASE_URL}social/publishPendingPost`, {post_id:post_id})
  }

  getPostObject(id){
    for (let index = 0; index < this.posts.length; index++) {
      if(this.posts[index].post_id == id){
        return this.posts[index];
      }
    }
  }


  /**
   * 
   * @param post_db the object post
   * @param reactions the reactions feedback form facebook
   */
  savePostFeedback(post_db, reactions){
    post_db.angry_count = reactions.angry.summary.total_count;
    post_db.haha_count = reactions.haha.summary.total_count;
    post_db.sad_count = reactions.sad.summary.total_count;
    post_db.wow_count = reactions.wow.summary.total_count;
    post_db.love_count = reactions.love.summary.total_count;
    post_db.like_count = reactions.like.summary.total_count;
    
    return this.http.post(`${environment.SERVER_BASE_URL}social/savePostFeedback`, post_db)
  }

}
