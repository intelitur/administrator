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

  getItineraryMinimalInfoByUser(id_user: number): Observable<any> {
    return this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}itinerary/minimalInfo/${id_user}`);
  }
}
