import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event/services/event.service';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { AddEventRequestComponent } from 'src/app/users/components/profile/add-event-request/add-event-request.component';

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
    private matDialog: MatDialog
  ) { }

  async ngOnInit() {

    await this.eventService.getAllPendingEventRequests().toPromise().then( (data: any) => {
      this.eventService.eventRequest = data
    })
    console.log(this.eventService.eventRequest)
  }

  showEventDetails(_action, _event){
    this.matDialog.open(AddEventRequestComponent, {height:"95%", width: "80%", minWidth: "280px", disableClose: true, data: { action : _action, event: _event}})
  }

  changeStateRequest(event, state){
    this.eventService.changeRequestState(event.event_id, state).subscribe({
      next: (data: any) => {
        data.status == 201? this.eventService.getAllPendingEventRequests() : null
      }
    })
  }

  /*
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
  */
}
