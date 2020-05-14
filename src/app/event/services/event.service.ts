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
  eventRequest = [{name:"a"}];
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
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}${event.info.event_id}`, event, {observe: 'response'})
  }

  /**
   * @function to change the event status
   * @param event_id to identify which event will change status
   */
  changeEventState(id){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}${id}/state`, null , {observe: 'response'})
  }

  /**
   * @function  to relate a company and event
   * @param company_id
   * @param event_id
   */
  addCompanyToEvent(company_id, event_id){
    let json = {
      "company_id": company_id,
      "event_id": event_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}EventToCompany`, json, {observe: 'response'})
  }

  /**
   * @function to delete a company from an event
   * @param company_id 
   * @param event_id 
   */
  deleteCompanyFromEvent(company_id, event_id){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}RemoveEventFromCompany/${company_id}/${event_id}`, {observe: 'response'})
  }

  /**
   * @function  to relate a category and event
   * @param category_id
   * @param event_id
   */
  addCategoryToEvent(category_id, event_id){
    let json= {
      "category_id": category_id,
      "event_id": event_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}AddCategoryToEvent`, json, {observe: 'response'})
  }

  obtainAllEventRequest(){

  }

  getEventRequestByCompany(id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${id}`)
  }
}