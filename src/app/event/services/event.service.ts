import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../general-services/common.service';
import { EventType } from '../models/Event';

@Injectable({
    providedIn: 'root'
})
export class EventService{

    events: Array<EventType>
    module= 'events/'
    
    constructor(
      private http: HttpClient,
      public commonService: CommonService
    ) {
    }

    /**
     * @function to obtain all events
     */
    getAllEvents(){
      return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`)
    }
    
    /**
     * @function to get only one specific event
     * @param event_id event's id to be obtained
     */
    getEvent(event_id){
      return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${event_id}`)
    }

    /**
     * @function to create a new event
     * @param event to be added
     */
    createEvent(event: EventType){
    
      let json ={
        "info": event,
        "latitude":  10.471681129073,
        "longitude": -84.64514404535
      }
      console.log(json)
      return this.http.post(`${environment.SERVER_BASE_URL}${this.module}`, json, {observe: 'response'})
    }

    /**
     * @function to modify an event
     * @param event to modified
     */
    modifyEvent(event: any){
      return this.http.patch(`${environment.IMAGES_URL_BASE}${this.module}/${event.event_id}`, event, {observe: 'response'})
    }

    /**
     * @function to change the event status
     * @param event_id to identify which event will change status
     */
    changeEventState(event_id: Number){
      return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${event_id}/state`, null , {observe: 'response'})
    }
}