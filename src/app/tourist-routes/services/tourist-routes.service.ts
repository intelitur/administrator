import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';
import { TouristRoute } from '../models/tourist-route';

@Injectable({
  providedIn: 'root'
})
export class TouristRoutesService {

  ads: Array<TouristRoute> = []; 
  module = "touristRoutes/"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  getTouristRoutes(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`);
  }

  getTouristRoute(tourist_route_id: Number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${tourist_route_id}`);
  }

  createTouristRoute(touristRoute: TouristRoute){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}`, touristRoute, {observe: 'response'});
  }

  modifyToursitRute(touristRoute: TouristRoute){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${touristRoute.tourist_route_id}`, touristRoute, {observe: 'response'});
  }

  disableTouristRoute(tourist_route_id: Number, is_active: Number){
    let json = {
      is_active
    }
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}${tourist_route_id}`, json, {observe: 'response'})
  }

  addOfferToTouristRoute(tourist_route_id: Number, offer_id: Number){
    let json = {
      tourist_route_id,
      offer_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}addOffer`, json, {observe: 'response'})
  }

  deleteOfferToTouristRoute(tourist_route_id: Number, offer_id: Number){
    let json = {
      tourist_route_id,
      offer_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}deleteOffer`, json, {observe: 'response'})
  }
}
