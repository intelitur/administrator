import { Component, OnInit, Input } from '@angular/core';
import { EventType } from 'src/app/event/models/Event';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from 'src/app/event/services/event.service';
import { ColorEvent } from 'ngx-color';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: EventType;
  eventFG: FormGroup
  allDay: boolean = false;
  loading: boolean = false;
  color: string;
  initial_date: any = undefined;
  final_date: any = undefined;
  today: any = new Date();
  initial_time: any = undefined;
  final_time: any =  undefined;
  common_date: any = undefined;

  constructor(
    public commonService: CommonService,
    public eventService: EventService,
  ) { }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      detail: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      cost: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]{1,}[.][0-9]{1,})*$")]) 
    });
  }

  /**
   * Toogle
   * @param param0 
   */
  changeState({source}: any){
    this.allDay == false ? this.allDay=true : this.allDay=false;
    source.checked = this.allDay;
  }

  /**
   * Color picker
   * @param event 
   */
  changeComplete(event: ColorEvent){
    this.color = event.color.hex;
  }

  /**
   * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
   */
  dateFilter = (date: Date): boolean => {
    return date >= this.initial_date
  }

  disableDialog(): boolean {
    if(!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || 
    (this.allDay == false && this.final_date== undefined) || 
    (this.allDay == true && this.initial_time == undefined) || 
    (this.allDay == true && this.final_time == undefined ) || 
    (this.allDay == true && this.common_date == undefined))  {
      return true
    }
    return false
  }
}