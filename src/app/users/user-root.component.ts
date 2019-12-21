import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
