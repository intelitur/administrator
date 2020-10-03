import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../general-services/common.service';
import { EventType } from '../models/Event';

@Injectable({
    providedIn: 'root'
})
export class EventService{

  events: Array<EventType> = [];
  eventRequest: Array<any>;
  module= 'events/'
  filter = {
    state: '0'
  }
  isFilters: boolean = false;
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
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}${event_id}`)
  }

  /**
   * @function to create a new event
   * @param event to be added
   * @param request false is just a normal event : true needs de user id who wants to create the event
   */
  createEvent(event: EventType, request?: boolean){
  
    let json;
    if(request == true){
      json ={
        "info": event,
        "latitude":  event.latitude,
        "longitude": event.longitude,
      }  
    }else{
      json ={
        "info": event,
        "latitude":  10.471681129073,
        "longitude": -84.64514404535
      }
    }
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
  addCompanyToEvent(company_id, event_id, user_id){
    let json = {
      company_id,
      event_id,
      user_id
    }
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}EventToCompany`, json, {observe: 'response'})
  }

  /**
   * @function to delete a company from an event
   * @param company_id 
   * @param event_id 
   */
  deleteCompanyFromEvent(company_id, event_id){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.module}${event_id}/companies/${company_id}`, {observe: 'response'})
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

  
  getAllPendingEventRequests(){
    return this.http.get(`${environment.SERVER_BASE_URL}petitions/2/-1`)
  }

  getEventRequestByCompany(id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${id}`)
  }

  getEventRequestsByUser(id, state?){
    return this.http.get(`${environment.SERVER_BASE_URL}petitions/${state}/${id}`)
  }

  changeRequestState(event_id,state){
    let json = {
      "event_id": event_id, 
	    "state": state
    }
    return this.http.put(`${environment.SERVER_BASE_URL}petitions/`,json, {observe: 'response'} ) 
  }

  getFilteredEvents(name?, initial_date?, final_date?, category_id?, score?, ratio?, latitude?, longitude?){
    let params:any = {}
    name != undefined? params.name = name : null 
    initial_date != undefined? params.initial_date = initial_date: null
    final_date != undefined? params.final_date = final_date: null
    category_id != undefined? params.category_id = category_id: null
    score != undefined? params.score = score: null
    ratio != undefined? params.meters = ratio: null
    latitude != undefined? params.latitude = latitude: null
    longitude != undefined? params.longitude = longitude: null
    
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`, {params})
  }

  getEventOffers(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}`)
  }

  sort(){
    if(this.filter.state == '0'){
      this.events = this.events.sort((a, b) => a.visits > b.visits ? -1 : a.visits < b.visits ? 1 : 0)
    }else if(this.filter.state == '1'){
      this.events = this.events.sort((a, b) => a.score > b.score ? -1 : a.score < b.score ? 1 : 0)
    }
    // else{
    //  rvice.events = this.events.sort((a, b) => a.publications > b.publications ? -1 : a.publications < b.publications ? 1 : 0)
    // }
  }
}