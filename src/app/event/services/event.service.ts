import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../general-services/common.service';

@Injectable({
    providedIn: 'root'
})
export class EventService{
  
    constructor(
      private http: HttpClient,
      public commonService: CommonService
    ) {
    }
}