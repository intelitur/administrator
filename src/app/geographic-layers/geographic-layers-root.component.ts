import { Component, OnInit } from '@angular/core';
import { GeographicLayersService } from './services/geographic-layers.service';

@Component({
  selector: 'app-geographic-layers-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class GeographicLayersRootComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

}
