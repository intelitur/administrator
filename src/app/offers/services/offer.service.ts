import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Offer } from "../models/Offer";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from 'src/app/general-services/auth.service';

@Injectable({
  providedIn: "root"
})
export class OfferService {
  offer_id: number;
  offer_name: string;
  offer_description: string;
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  /**
   * @function get all offers
   */
  getOffers(): Observable<any> {
    let query : any = {name: '',event_id: ''}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/`, {params: query});
  }

  /**
   * @function get services by offer id
   * @param id_offer 
   */
  getServicesByOffer(id_offer:number): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/${id_offer}`);
  }
  /**
   * @function post that add offer
   * @param offer 
   */
  addOffer(offer: Offer): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}offers/`, {
      info: offer
    });
  }
  /**
   * @function post add services to offer by id
   * @param offer 
   */
  addServiceToOffer(offer_id: number, services: Array<any>): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}offers/services`, {
      offer_id,
      services
    });
  }
  /**
   * @function put update offer by id
   * @param offer 
   * @param offer_id 
   */
  saveOffer(offer: Offer, offer_id:number): Observable<any> {
    return this._http.put(`${environment.SERVER_BASE_URL}offers/${offer_id}`, {
      offer
    });
  }
  /**
   * @function delete offer by id
   * @param id_offer 
   */
  deleteOffer(id_offer:number): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}offers/${id_offer}`);
  }
}
