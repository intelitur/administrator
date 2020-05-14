import { Component, OnInit } from '@angular/core';
import { EventType } from '../../models/Event';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  eventSubscription: Subscription
  event_id: Number;
  myEvent: EventType; 

  constructor(
    private route: ActivatedRoute,
    public eventService: EventService
  ) { }

  ngOnInit() {
    this.eventSubscription = this.route.paramMap.subscribe((params) => {
      this.event_id = Number(params.get("event_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.eventSubscription.unsubscribe();
  }

  recharge(){
    this.eventService.getEvent(Number(this.event_id)).subscribe((data: any) => {
      this.myEvent = <EventType> data;
    })
  }

}
