import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  images: any = [];
  currentImages: any = [];
  module = "touristImages/"

  constructor(private http: HttpClient) { }

  getTouristViewImages(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`);
  }
}
