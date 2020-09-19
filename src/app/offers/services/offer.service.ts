import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Offer } from "../models/Offer";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Filter } from "../models/Filter.interface";
import { AuthService } from 'src/app/general-services/auth.service';
import { User } from 'src/app/users/models/User.class';

@Injectable({
  providedIn: "root"
})
export class OfferService {
  offer_id: number;
  offer_name: string;
  offer_description: string;
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  getOffers(): Observable<any> {
    let query : any = {name: '',event_id: ''}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/`, {params: query});
  }

  getOffersByUser(user_id: number,liked:boolean, viewed:boolean, reserved:boolean, favorite:boolean): Observable<any> {
    let query : any = {liked,viewed,reserved,favorite}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/${user_id}`, {params: query});
  }
  /**
   * @function get services by offer id
   * @param id_offer 
   */
  getServicesByOffer(id_offer:number): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/${id_offer}`);
  }

  addOffer(offer: Offer): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}offers/`, {
      info: offer
    });
  }

  saveOffer(offer: Offer, offer_id:number): Observable<any> {
    return this._http.put(`${environment.SERVER_BASE_URL}offers/${offer_id}`, {
      offer
    });
  }
 
 

  filterItineraries(filters: Filter): Observable<ResponseInterface> {
    return this._http.post<ResponseInterface>(
      `${environment.SERVER_BASE_URL}itinerary/filter`,
      filters
    );
  }
}
