import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CompanyRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
