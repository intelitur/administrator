import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ItineraryService {
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
}
