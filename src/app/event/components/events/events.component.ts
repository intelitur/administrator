import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventType } from '../../models/Event';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { EventCreateComponent } from '../event-create/event-create.component'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  filter = {
    name: ""
  }
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public eventService: EventService,
    public commonService: CommonService,
    public dialogService: DialogManagerService
  ) { }

  ngOnInit() {
    this.obtainAllEvents()
  }

  obtainAllEvents(){
    this.isFilters = false
    this.subscription = this.eventService.getAllEvents()
    .subscribe({
      next: (data: any) => {
        this.eventService.events = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  openCreateEventDialog(){
    this.dialogService.open(EventCreateComponent, {height:"90%", width: "60%", minWidth: "280px", disableClose: true})
  }

  changeState(event: EventType, {source}: any){

  }

  
}
