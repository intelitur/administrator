import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourist-routes-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TouristRoutesRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
