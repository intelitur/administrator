import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent implements OnInit {
  private subscription: Subscription;
  constructor(
    public commonService: CommonService,
    public eventService: EventService
  ) { }

  ngOnInit() {
  }

  changeTab(event){
    if(event.index == 0){
      this.eventService.isFilters = false
      this.subscription = this.eventService.getFilteredEvents()
      .subscribe({
        next: (data: any) => {
          this.eventService.events = data;
          this.eventService.sort()
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
    }
  }
}
