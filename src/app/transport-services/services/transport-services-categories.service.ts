import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportServicesCategoriesService {

  module = "transportCategories"
  categories = [];
  constructor(
    private http: HttpClient
  ) { }

  getTransportServicesCategories(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`);
  }

  createTransportServicesCategory(name: string){
    let json = {
      name
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, json, {observe: 'response'});
  }
  
  deleteTransportCategory(categoy_id: Number){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${categoy_id}`, {observe: 'response'});
  }
}
