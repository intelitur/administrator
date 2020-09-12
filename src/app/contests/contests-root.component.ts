import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contests-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ContestsRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
