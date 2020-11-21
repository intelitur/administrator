import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-codes-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class QrCodesRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
