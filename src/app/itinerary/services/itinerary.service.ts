import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Itinerary } from "../models/Itinerary";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ItineraryService {
  itinerary_id: number;
  constructor(private _http: HttpClient) {}

  saveItinerary(it: Itinerary): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}/itinerary/save`, it);
  }
}
