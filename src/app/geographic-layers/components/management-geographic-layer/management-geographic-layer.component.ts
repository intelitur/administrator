import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeographicLayersService } from '../../services/geographic-layers.service';

@Component({
  selector: 'app-management-geographic-layer',
  templateUrl: './management-geographic-layer.component.html',
  styleUrls: ['./management-geographic-layer.component.scss']
})
export class ManagementGeographicLayerComponent implements OnInit {

  subscription: Subscription
  layer_id: Number;
  myLayer;

  constructor(
    private route: ActivatedRoute,
    private geographicLayerService: GeographicLayersService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.layer_id= Number(params.get("layer_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.geographicLayerService.getLayer(Number(this.layer_id)).subscribe((data: any) => {
      this.myLayer = data;
    })
  }

}
