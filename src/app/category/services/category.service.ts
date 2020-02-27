import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../general-services/common.service';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  module = "categories"
  categories: Array<Category>;

  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) {
  }

  /**
   * @function to create a new category
   * @param category the category to be added
   */
  createCategory(category: Category){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/CreateCategory`, category, {observe: 'response'})
  }

  /**
   * @function to modify a category 
   * @param category the category to be modified
   */
  modifyCategory(category: any){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${category.category_id}`,category, {observe: 'response'})
  }

  /**
   * @function to activate or deactivate a category
   * @param id category's id that will change status
   */
  changeStateCategory(id){  
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${id}/state`, null ,{observe: 'response'})
  }

  /**
   * @function to get only one specific category
   * @param category_id category's id to be obtened
   */
  getCategory(category_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${category_id}`)
  }

  /**
   * @function to get all categories
   */
  getAllCategories(type?: number){
    let query : any = {state: type}
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`, {params: query})
  }
}