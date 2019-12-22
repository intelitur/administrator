import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseInterface } from "src/app/globalModels/Response.interface";

@Injectable({
  providedIn: "root"
})
export class ItineraryService {
  itinerary_id: number = 5; //TODO: Cambiar esto
  constructor(private _http: HttpClient) {}

  saveItinerary(it: Itinerary, categories_ids: Array<number>): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}itinerary/save`, {
      info: it.info,
      categories_ids: categories_ids,
      group_type_id: it.group_type_id,
      user_id: 9
    });
  }

  getItineraryFullInfo(id_itinerary: number): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/fullInfo/${id_itinerary}`
    );
  }

  getDayInfo(id_itinerary: number, day_number: number): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/dayInfo/${id_itinerary}/${day_number}`
    );
  }

  getItineraryMinimalInfoByUser(id_user: number): Observable<Array<any>> {
    return this._http.get<Array<any>>(
      `${environment.SERVER_BASE_URL}itinerary/minimalInfo/${id_user}`
    );
  }

  getGroupTypes(): Observable<ResponseInterface> {
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}groupType/getAll`
    );
  }

  getCategories(): Observable<ResponseInterface> {
    return this._http.get<ResponseInterface>(
      `${environment.SERVER_BASE_URL}category/getAll`
    );
  }

  /**
   * @function Add Promotion in itinerary
   * @param promotion_id
   */
  addPromotionInItinerary(promotion_id: number): Observable<any> {
    return this._http.post(
      `${environment.SERVER_BASE_URL}itinerary/addPromotionInItinerary`,
      { itinerary_id: this.itinerary_id, promotion_id: promotion_id }
    );
  }
  /**
   * @function Get promotion by itinerary id
   */
  getPromotionByItinerayID(): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/getPromotionByItinerayID/${this.itinerary_id}`
    );
  }
  /**
   * @funtion Get all promotion except added promotion in itinerary
   */
  getAllPromotions(): Observable<any> {
    return this._http.get(
      `${environment.SERVER_BASE_URL}itinerary/getAllPromotions/${this.itinerary_id}`
    );
  }

  /**
   * @funtion delete promotion of itinerary
   * @param promotion_id
   */
  deletePromotionOfItinerary(promotion_id: number) {
    return this._http.post(
      `${environment.SERVER_BASE_URL}itinerary/deletePromotionOfItinerary`,
      { itinerary_id: this.itinerary_id, promotion_id: promotion_id }
    );
  }
}
