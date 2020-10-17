import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { AuthService } from 'src/app/general-services/auth.service';
import { User } from 'src/app/users/models/User.class';

import { Service } from "../models/Service";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  offer_id: number;
  offer_name: string;
  offer_descripcion: string;
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  /**
   * @function get alls services
   */
  getServices(): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}services/`);
  }
  /**
   * @function delete services by id
   * @param service_id 
   */
  deleteService(service_id: number): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}services/${service_id}`);
  }
  /**
   * @function post and create new services by offer
   * @param service_id 
   * @param offer_id 
   */
  addServiceToOffer(service_id: number, offer_id:number): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}services/offer`, {
      service_id, 
      offer_id
    });
  }  
  /**
   * @function delete services by id in offer
   * @param service_id 
   * @param offer_id 
   */
  deleteServiceToOffer(service_id: number, offer_id:number): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}services/${service_id}/offers/${offer_id}`);
  }
  /**
   * @function get alls offers
   * @param name 
   * @param event_id 
   */
  getOffers(name, event_id): Observable<any> {
    let query : any = {name: name,event_id: event_id}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/`, {params: query});
  }
  /**
   * @function post and create new services
   * @param service 
   */
  addService(service: Service): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}services/`, {
      category_id: service.category_id,
      name: service.name
    });
  }

  /**
   * @function get categories by state
   * @param state 
   */
  getCategories(state:number): Observable<ResponseInterface> {
    let query:any = {state};
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}categories/`,{params: query});
  }
}
