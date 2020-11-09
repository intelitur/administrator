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
  module = "touristRoutes"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  getTouristRoutes(is_active: boolean){
    let params = {
      is_active: String(is_active)
    }
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`, {params : params});
  }

  getTouristRoute(tourist_route_id: Number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${tourist_route_id}`);
  }

  createTouristRoute(touristRoute: TouristRoute){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, touristRoute, {observe: 'response'});
  }

  modifyTouristRute(touristRoute: TouristRoute){
    let json = {
      name: touristRoute.name
    }
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/${touristRoute.route_id}`, json, {observe: 'response'});
  }

  changeTouristRouteState(tourist_route_id: Number){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${tourist_route_id}`, {observe: 'response'})
  }

  getTouristRouteOffers(tourist_route_id: Number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${tourist_route_id}/offers`);
  }

  addOfferToTouristRoute(route_id: Number, offer_id: Number){
    let json = {
      route_id,
      offer_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/offers`, json, {observe: 'response'})
  }

  deleteOfferFromTouristRoute(tourist_route_id: Number, offer_id: Number){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${tourist_route_id}/offers/${offer_id}`, {observe: 'response'})
  }
}
