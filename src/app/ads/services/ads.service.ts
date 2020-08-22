import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { Ads } from '../models/Ads';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads: Array<Ads> = []; //quitar el = []
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
    let json = {
      "info": ad,
      "latitude":  10.471681129073,
      "longitude": -84.64514404535
    }
    console.log(json)
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/CreateAd`, json, {observe: 'response'})
  }

  modifyAd(ad: any){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${ad.ad_id}`,ad, {observe: 'response'})
  }

  getStadisticsAds(company_id?: number){
    if(company_id){ 
      return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/stadistics/${company_id}`)
    }
    return  this.http.get(`${environment.SERVER_BASE_URL}${this.module}/stadistics/`)
  }
}
