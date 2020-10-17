import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';
import { TouristRoute } from '../models/tourist-route';

@Injectable({
  providedIn: 'root'
})
export class TouristRoutesService {

  touristRoutes: Array<TouristRoute> = []; 
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

  modifyTouristRute(touristRoute: TouristRoute){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${touristRoute.tourist_route_id}`, touristRoute, {observe: 'response'});
  }

  changeTouristRouteState(tourist_route_id: Number){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}${tourist_route_id}`, null, {observe: 'response'})
  }

  getTouristRouteOffers(tourist_route_id: Number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}${tourist_route_id}/offers`);
  }

  addOfferToTouristRoute(tourist_route_id: Number, offer_id: Number){
    let json = {
      tourist_route_id,
      offer_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}addOffer`, json, {observe: 'response'})
  }

  deleteOfferFromTouristRoute(tourist_route_id: Number, offer_id: Number){
    let json = {
      tourist_route_id,
      offer_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}deleteOffer`, json, {observe: 'response'})
  }
}
