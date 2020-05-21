import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-union-event-request',
  templateUrl: './union-event-request.component.html',
  styleUrls: ['./union-event-request.component.scss']
})
export class UnionEventRequestComponent implements OnInit {

  user: any

  userRequest: any[] = [];

  filter = {
    name: "",
  }

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.actualUser
    this.refresh()
  }

  refresh(){

  }
}
