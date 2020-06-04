import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event/services/event.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatDialog } from '@angular/material';
import { AddEventRequestComponent } from '../add-event-request/add-event-request.component';

@Component({
  selector: 'app-create-even-request',
  templateUrl: './create-even-request.component.html',
  styleUrls: ['./create-even-request.component.scss']
})
export class CreateEvenRequestComponent implements OnInit {

  filter = {
    name: '',
    state: '',
    filter: (request) => request.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  loading = true; 

  eventRequests: Array<any> = [];

  constructor(
    private eventService: EventService,
    private userService: UserService,
    private matDialog: MatDialog
  ) { }

  refresh(){
    this.loading = true;
    let state = Number(this.filter.state)
    state == 0? state = -1 : state = Number(this.filter.state)
    this.eventService.getEventRequestsByUser(this.userService.actualUser.user_id, state).subscribe((data: any) =>{ 
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
  
  /**
   * 
   * @param action false to create true to show info
   */
  submit(_action: boolean, _event?: any){
    this.matDialog.open(AddEventRequestComponent, {height:"95%", width: "80%", minWidth: "280px", disableClose: true, data: { action : _action, event: _event}})
  }
  
}
