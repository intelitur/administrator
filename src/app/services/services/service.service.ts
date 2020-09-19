import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Filter } from "../models/Filter.interface";
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


  getServices(): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}services/`);
  }
  deleteService(service_id: number): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}services/${service_id}`);
  }
  addServiceToOffer(services: Array<any>, offer_id:number): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}services/offer`, {
      services, 
      offer_id
    });
  }  
  deleteServiceToOffer(service_id: number, offer_id:number): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}services/${service_id}/offers/${offer_id}`);
  }

  getOffers(name, event_id): Observable<any> {
    let query : any = {name: name,event_id: event_id}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/`, {params: query});
  }
  getOffersByUser(user_id: number,liked:boolean, viewed:boolean, reserved:boolean, favorite:boolean): Observable<any> {
    let query : any = {liked,viewed,reserved,favorite}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/${user_id}`, {params: query});
  }
  addService(service: Service): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}services/`, {
      category_id: service.category_id,
      name: service.name
    });
  }


  getItineraryFullInfo(id_itinerary: number): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/fullInfo/${id_itinerary}`
    );
  }

  filterItineraries(filters: Filter): Observable<ResponseInterface> {
    return this._http.post<ResponseInterface>(
      `${environment.SERVER_BASE_URL}itinerary/filter`,
      filters
    );
  }


  getCategories(state:number): Observable<ResponseInterface> {
    let query:any = {state};
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}categories/`,{params: query});
  }
}
