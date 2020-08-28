import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AuthService } from 'src/app/general-services/auth.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-events-stadistics',
  templateUrl: './events-stadistics.component.html',
  styleUrls: ['./events-stadistics.component.scss']
})
export class EventsStadisticsComponent implements OnInit {

  private subscription: Subscription;
  start_Date = undefined;
  end_Date = undefined;
  isFilterd = false;

  constructor(
    public eventService: EventService,
    public authService: AuthService,
    public commonService: CommonService,
  ) { }

  ngOnInit() {
    this.obtainAllEvents()
  }

  obtainAllEvents(){
    this.isFilterd = false;
    this.subscription = this.eventService.getFilteredEvents()
    .subscribe({
      next: (data: any) => {
        this.eventService.events = data;
        this.eventService.sort();
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }


  filterByDate(){
    this.isFilterd = true;
    let initialDate = this.formatDate(this.start_Date)
    let finalDate = this.formatDate(this.end_Date)
    this.subscription = this.eventService.getFilteredEvents(undefined,initialDate,finalDate)
    .subscribe({
      next: (data: any) => {
        this.eventService.events = data;
        this.subscription.unsubscribe();
        this.eventService.sort();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  formatDate(date: Date){
    if(date != undefined){
      date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 )

      let year = date.getFullYear()
      let month = (date.getMonth()+1) >= 10? (date.getMonth()+1) : "0"+(date.getMonth()+1) 
      let day = date.getDate() >= 10? date.getDate(): "0"+date.getDate()
      return year+"-"+month+"-"+day 
    }
  }
}
