import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { Ads } from '../models/Ads';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads: Array<Ads> = []; 
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
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${id}`, {observe: 'response'})
  }

  createAd(ad: Ads){
    let json = {
      "info": ad,
      "latitude":  10.471681129073,
      "longitude": -84.64514404535
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, json, {observe: 'response'})
  }

  modifyAd(ad: any){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/${ad.info.ad_id}`,ad, {observe: 'response'})
  }

  getStadisticsAds(user_id?: number){
    if(user_id){ 
      return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${user_id}`)
    }
    return  this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`)
  }

  addAdToCompany(ad_id, company_id){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/${ad_id}/companies/${company_id}`, {observe: 'response'})
  }

  getCompaniesByAd(ad_id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${ad_id}/companies`)
  }

  deleteAdFromCompany(company_id, ad_id){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}/${ad_id}/companies/${company_id}`, {observe: 'response'})
  }
}
