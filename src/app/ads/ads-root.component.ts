import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdsRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
