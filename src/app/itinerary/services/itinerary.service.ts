import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ItineraryService {
  itinerary_id: number = 5; //TODO: Cambiar esto
  constructor(private _http: HttpClient) {}

  saveItinerary(it: Itinerary): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}itinerary/save`, it);
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
