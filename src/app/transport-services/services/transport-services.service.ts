import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransportService } from '../models/transport-service';

@Injectable({
  providedIn: 'root'
})
export class TransportServicesService {

  transportServices = []
  module = "transportServices"

  constructor(
    private http: HttpClient
  ) { }

  getTransportServices(user_id?: Number){
    let params: any = {}

    user_id != undefined ? params.user_id = user_id : null

    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`, {params: params});
  }

  getTranportService(transport_id: Number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${transport_id}`);
  }

  createTransportService(ts: TransportService){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, ts, {observe: 'response'});
  }

  modifyTransportService(ts: TransportService){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/${ts.transport_id}`, ts, {observe: 'response'});
  }

  changeTransportServiceState(ts: TransportService){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${ts.transport_id}`,  {observe: 'response'});
  }

  changeRequestState(transport_id: Number, state: Number){
    let json = {
      transport_id, 
	    state
    }
    return this.http.put(`${environment.SERVER_BASE_URL}/petitions`,json, {observe: 'response'} ) 
  }
}
