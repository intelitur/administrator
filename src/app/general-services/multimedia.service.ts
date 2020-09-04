import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(
    public http: HttpClient
  ) { }

  getImages(element_id, type ){
    let params = {
      "t": type,
      "e_id": element_id
    }
    return this.http.get(`${environment.SERVER_BASE_URL}images/`, {params})
  }

  addImage(element_id, type, name ){
    let json = {
      "element_id": element_id,
      "type": type,
      "name": name
    }
    return this.http.post(`${environment.SERVER_BASE_URL}images/`, json, {observe: 'response'})
  }

  deleteImage(name){
    return this.http.delete(`${environment.SERVER_BASE_URL}images/${name}`, {observe: 'response'})
  }
}
