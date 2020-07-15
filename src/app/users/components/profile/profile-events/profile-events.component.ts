import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event/services/event.service';
import { CommonService } from 'src/app/general-services/common.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/app/users/models/User.class';

@Component({
  selector: 'app-profile-events',
  templateUrl: './profile-events.component.html',
  styleUrls: ['./profile-events.component.scss']
})
export class ProfileEventsComponent implements OnInit {


  user: User;
  userEvents: any[] = [];
  isFilters: boolean = false;
  filter = {
    name: ""
  }
  private subscription: Subscription;

  constructor(
    public commonService: CommonService,
    public userService: UserService,
    public eventService: EventService
  ) { }

  ngOnInit() {
    this.user = this.userService.actualUser;
    this.eventService.getEventRequestsByUser(this.user.user_id, 1).subscribe({
      next: (data:any) => {
        console.log(data)
        this.userEvents = data
      }
    })
  }

}
