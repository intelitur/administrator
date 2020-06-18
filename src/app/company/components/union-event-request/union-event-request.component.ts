import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union-event-request',
  templateUrl: './union-event-request.component.html',
  styleUrls: ['./union-event-request.component.scss']
})
export class UnionEventRequestComponent implements OnInit {

  filter = {
    state: '',
    name: '',
    filter: (request: any) => 
    (request.user_info.name + ' ' + request.user_info.lastName + " " + request.company_info.name)
    .toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  eventRequests: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
