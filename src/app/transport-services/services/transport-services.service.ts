import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { TransportService } from "../models/transport-service";

@Injectable({
  providedIn: "root",
})
export class TransportServicesService {
  transportServices = [];
  module = "transportationService/";

  constructor(private http: HttpClient) {}

  getTransportServices(user_id?: Number) {
    if (user_id != undefined) {
      return this.http.get(
        `${environment.SERVER_BASE_URL}${this.module}user/${user_id}`, {params: {_status: "1"}}
      );
    } else {
      return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`, {params: {_status: "1"}});
    }
  }


  getTranspotServicesPetitions(status: Number){
    let params = {
      _status: status.toString()
    }
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`, {params: params});
  }

  getTranportService(transport_id: Number) {
    return this.http.get(
      `${environment.SERVER_BASE_URL}${this.module}${transport_id}`
    );
  }

  createTransportService(ts: TransportService) {
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}`, ts, {
      observe: "response",
    });
  }

  modifyTransportService(ts: TransportService) {
    let json = {
      categories_id: ts.categories_id,
      name: ts.name,
      email: ts.email,
      tel: ts.tel,
      hire_dir: ts.hire_dir
    }

    return this.http.patch(
      `${environment.SERVER_BASE_URL}${this.module}${ts.transport_service_id}`,
      json,
      { observe: "response" }
    );
  }

  changeTransportServiceState(ts: TransportService) {
    return this.http.delete(
      `${environment.SERVER_BASE_URL}${this.module}${ts.transport_service_id}`,
      { observe: "response" }
    );
  }

  changeRequestState(transport_id: Number, status: Number) {
    let json = {
      status
    };
    console.log(status)
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${transport_id}`, json, {
      observe: "response",
    });
  }
}
