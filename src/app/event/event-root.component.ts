import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class EventRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}