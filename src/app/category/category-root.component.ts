import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CategoryRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}