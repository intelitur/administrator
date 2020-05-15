import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event/services/event.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatDialog } from '@angular/material';
import { EventCreateComponent } from 'src/app/event/components/event-create/event-create.component';

@Component({
  selector: 'app-create-even-request',
  templateUrl: './create-even-request.component.html',
  styleUrls: ['./create-even-request.component.scss']
})
export class CreateEvenRequestComponent implements OnInit {

  filter = {
    name: '',
    state: '',
    filter: (request) => request.event_info.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  loading = true;

  eventRequests: any[]

  constructor(
    private eventService: EventService,
    private userService: UserService,
    private matDialog: MatDialog
  ) { }

  refresh(){
    this.loading = true;
    this.eventService.getEventRequestsByUser(this.userService.actualUser.user_id, Number(this.filter.state)).subscribe((data: any) =>{
      console.log(data)
      this.eventRequests = data;
      this.loading = false;
    })
  }

  ngOnInit() {
    this.refresh()
  }

  deleteRequest(user_id, event_id){

  }

  cancelEventRequest(user_id, event_id){

  }
  
  submit(){
    this.matDialog.open(EventCreateComponent, {height:"95%", width: "80%", minWidth: "280px", disableClose: true, data: this.userService.actualUser})
  }
  
}
