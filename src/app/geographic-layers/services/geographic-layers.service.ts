import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeographicLayersService {
  layers = [];
  module = "geographicLayers/"

  constructor(private http: HttpClient) { }

  getLayers(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`, {params: {is_active: "true"}});
  }

  getLayerPoints(layer_id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}${layer_id}/point`);
  }

  createLayer(layer){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}`, layer, {observe: 'response'})
  }

  createLayerPoint(layer_point){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}point`, layer_point, {observe: 'response'})
  }

  updateLayer(layer, layer_id){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${layer_id}`, layer, {observe: 'response'})
  }

  updateLayerPoint(layer_point, layer_point_id){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${layer_point_id}/point`, layer_point, {observe: 'response'})
  }

  deleteLayer(layer_id){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}${layer_id}`,  {observe: 'response'})
  }

  deleteLayerPoint(layer_point_id){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}${layer_point_id}/point`,  {observe: 'response'})
  }
}
