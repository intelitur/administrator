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

  filter = {
    state: '0'
  }
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
  }

  obtainAllEvents(){
    this.isFilterd = false;
    this.subscription = this.eventService.getAllEvents()
    .subscribe({
      next: (data: any) => {
        this.eventService.events = data;
        this.subscription.unsubscribe();
        this.refresh();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }

  refresh(){
    if(this.eventService.events == []){
      this.obtainAllEvents();
    }

    if(this.filter.state == '0'){
      this.eventService.events = this.eventService.events.sort((a, b) => a.visits < b.visits ? -1 : a.visits > b.visits ? 1 : 0)
    }else if(this.filter.state == '1'){
      this.eventService.events = this.eventService.events.sort((a, b) => a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0)
    }else{
      this.eventService.events = this.eventService.events.sort((a, b) => a.publications < b.publications ? -1 : a.publications > b.publications ? 1 : 0)
    }
  }

  filterByDate(){
    this.isFilterd = true;
    //llamar endpiont con star_date y end_date 
  }
}
