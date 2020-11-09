import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ImagesRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
