import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event/services/event.service';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { EventRequestFiltersComponent } from './event-request-filters/event-request-filters.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.scss']
})
export class EventRequestComponent implements OnInit {

  filter = {
    name: ""
  }
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    private eventService: EventService,
    private dialogService: MatDialog,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.subscription =  this.eventService.obtainAllEventRequest().subscribe({
      next: (data: any) => {
        console.log(data);
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  showEventDetails(){

  }

  acceptEvent(){

  }

  denyEvent(){

  }

  openFilterOptionsDialog(){
    const  dialog = this.dialogService.open(EventRequestFiltersComponent, {width: "50", minWidth: "280px", disableClose: true})

    dialog.afterClosed().subscribe( company_id => {
      if(company_id != undefined){
        this.isFilters = true
        this.subscription = this.eventService.getEventRequestByCompany(company_id)
        .subscribe({
          next: (data: any) => {
            this.eventService.eventRequest = data;
            this.subscription.unsubscribe();
          }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
      }

    })
  }
}
