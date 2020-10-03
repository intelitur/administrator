import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TouristRoute } from '../../models/tourist-route';
import { TouristRoutesService } from '../../services/tourist-routes.service';

@Component({
  selector: 'app-management-tourist-routes',
  templateUrl: './management-tourist-routes.component.html',
  styleUrls: ['./management-tourist-routes.component.scss']
})
export class ManagementTouristRoutesComponent implements OnInit, OnDestroy {

  myRoute: TouristRoute;
  route_id: Number;
  subscription: Subscription
  
  constructor(
    private route: ActivatedRoute,
    private touristRouteService: TouristRoutesService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.route_id = Number(params.get("tourist-route_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.touristRouteService.getTouristRoute(Number(this.route_id)).subscribe((data: any) => {
      this.myRoute = <TouristRoute> data;
    })
  }
}
