import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QRCode } from '../models/qr-code';

@Injectable({
  providedIn: 'root'
})
export class QrCodesService {

  module="qrs/"
  qrCodes = []

  constructor(private http: HttpClient) { }

  getQRCodes(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`);
  }
  
  create(qrCode: QRCode){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}`, qrCode, {observe: 'response'})
  }

  modify(qrCode: QRCode){
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}`, qrCode, {observe: 'response'})
  }

  delete(qrCode_id: Number){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}${qrCode_id}`, {observe: 'response'})
  }
}
