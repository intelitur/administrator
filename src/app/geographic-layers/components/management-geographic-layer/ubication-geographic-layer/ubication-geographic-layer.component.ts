import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubication-geographic-layer',
  templateUrl: './ubication-geographic-layer.component.html',
  styleUrls: ['./ubication-geographic-layer.component.scss']
})
export class UbicationGeographicLayerComponent implements OnInit {

  @Input() myLayer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.myLayer)
  }

}
