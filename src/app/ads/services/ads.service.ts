import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { Ads } from '../models/Ads';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads: Array<Ads>;
  module = "ads"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  getAllAds(){
    return  this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`)
  }

  getAd(ad_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${ad_id}`)
  }

  changeStateAd(id){  
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${id}/state`, null ,{observe: 'response'})
  }

  createAd(ad: Ads){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/CreateAd`, ad, {observe: 'response'})
  }
}
