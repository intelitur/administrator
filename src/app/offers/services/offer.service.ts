import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
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
  offer_descripcion: string;
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  getOffers(name, event_id): Observable<any> {
    let query : any = {name: name,event_id: event_id}
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}offers/`, {params: query});
  }




  getFavoriteItinerary(user_id: number): Observable<any> {
    return this._http.get(`${environment.SERVER_BASE_URL}favorite/getFavoriteItinerary/${user_id}`);
  }

  getFavoriteOffer(user_id: number): Observable<any> {
    return this._http.get(`${environment.SERVER_BASE_URL}favorite/getFavoriteOffer/${user_id}`);
  };

  addFavoriteItinerary(itinerary_id: number, user_id: number) : Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}favorite/addFavoriteItinerary`,{id_itinerary: itinerary_id, id_user: user_id});
  };
  
  addFavoriteOffer(offer_id: number, user_id: number) : Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}favorite/addFavoriteOffer`,{id_offer: offer_id, id_user: user_id});
  };

  removeFavoriteItinerary(itinerary_id: number, user_id: number) : Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}favorite/removeFavoriteItinerary`,{id_itinerary: itinerary_id, id_user: user_id});
  };
  
  removeFavoriteOffer(offer_id: number, user_id: number) : Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}favorite/removeFavoriteOffer`,{id_offer: offer_id, id_user: user_id});
  };

  getFavoriteItineraryMinimalInfoByUser(id_user: number): Observable<any> {
    return this._http.get<Array<any>>(
      `${environment.SERVER_BASE_URL}favorite/itineraryFavoriteInfo/${id_user}`
    );
  }

  getFavoriteOfferInfoByUser(id_user: number): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}favorite/offerFavoriteInfo/${id_user}`);
  }

  getItineraryMinimalInfoByUser(id_user: number): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}itinerary/minimalInfo/${id_user}`);
  }

  changeActiveState(itinerary_id: number, info: any) : Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}itinerary/changeActiveState`,{id: itinerary_id, info: info});
  };

  saveItinerary(it: Itinerary, categories_ids: Array<number>): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}itinerary/save`, {
      info: it.info,
      categories_ids: categories_ids,
      group_type_id: it.group_type_id,
      user_id: (this._auth.getUser() as User).user_id
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

  addDay(
    id_itinerary: number,
    day_number: number,
    details: string,
    new_duration: number
  ): Observable<ResponseInterface> {
    return this._http.post(`${environment.SERVER_BASE_URL}day/save`, {
      id_itinerary: id_itinerary,
      day_number: day_number,
      details: details,
      new_duration: new_duration
    });
  }

  getDayInfo(id_itinerary: number): Observable<any> {
    return this._http.get(`${environment.SERVER_BASE_URL}day/dayInfo/${id_itinerary}`);
  }

  unlinkOffer(
    offer_id: number,
    itinerary_id: number,
    day_number: number
  ): Observable<any> {
    return this._http.delete(
      `${environment.SERVER_BASE_URL}itinerary/unlinkOffer?it_id=${itinerary_id}&off_id=${offer_id}&day=${day_number}`);
  }

  getGroupTypes(): Observable<ResponseInterface> {
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}groupType/getAll`);
  }

  getCategories(): Observable<ResponseInterface> {
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}category/getAll`);
  }

  /**
   * @function Add Promotion in itinerary
   * @param promotion_id
   */
  addPromotionInItinerary(promotion_id: number): Observable<any> {
    return this._http.post(
      `${environment.SERVER_BASE_URL}itinerary/addPromotionInItinerary`,
      { itinerary_id: this.offer_id, promotion_id: promotion_id }
    );
  }

  /**
   * @function Get promotion by itinerary id
   */
  getPromotionByItineraryID(): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/getPromotionByItinerayID/${this.offer_id}`
    );
  }

  /**
   * @funtion Get all promotion except added promotion in itinerary
   */
  getAllPromotions(): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/getAllPromotions/${this.offer_id}`
    );
  }

  /**
   * @funtion Get all promotion except added promotion in itinerary
   */
  getDaysDetails(itinerary_id: number): Observable<ResponseInterface> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}day/daysDetails/${itinerary_id}`
    );
  }

  saveImageUrl(it_id: number, url: string): Observable<any> {
    return this._http.post(
      `${environment.SERVER_BASE_URL}itinerary/saveImageUrl`,
      { it_id: it_id, url: url }
    );
  }

  updateDayDistribution(
    day_distribution: Array<any>
  ): Observable<ResponseInterface> {
    console.log(day_distribution);
    return this._http.put<ResponseInterface>(
      `${environment.SERVER_BASE_URL}day/updateDayDistribution`,
      { day_distribution: day_distribution }
    );
  }

  /**
   * @funtion delete promotion of itinerary
   * @param promotion_id
   */
  deletePromotionOfItinerary(promotion_id: number) {
    return this._http.post(
      `${environment.SERVER_BASE_URL}itinerary/deletePromotionOfItinerary`,
      { itinerary_id: this.offer_id, promotion_id: promotion_id }
    );
  }
  /**
   * @function Get all event geometry points by itinerary id
   */
  getEventGeomByItineraryID(){
    return this._http.get(`${environment.SERVER_BASE_URL}itinerary/getEventGeomByItineraryID/${this.offer_id}`);
  }

  deleteDay(id_itinerary: number, day_number: number) {
    return this._http.delete(
      `${environment.SERVER_BASE_URL}day/deleteDay/${id_itinerary}/${day_number}`
    );
  }
}
