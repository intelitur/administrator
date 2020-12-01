import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TransportService } from '../../models/transport-service';
import { TransportServicesService } from '../../services/transport-services.service';

@Component({
  selector: 'app-management-transport-services',
  templateUrl: './management-transport-services.component.html',
  styleUrls: ['./management-transport-services.component.scss']
})
export class ManagementTransportServicesComponent implements OnInit {

  subscription: Subscription
  transport_id: Number;
  transport: TransportService; 

  constructor(
    private route: ActivatedRoute,
    public transportService: TransportServicesService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.transport_id = Number(params.get("transport_service_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.transportService.getTranportService(Number(this.transport_id)).subscribe((data: any) => {
      this.transport = <TransportService> data;
    })
  }

}
