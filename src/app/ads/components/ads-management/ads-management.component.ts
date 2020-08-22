import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ads } from '../../models/Ads';
import { ActivatedRoute } from '@angular/router';
import { AdsService } from '../../services/ads.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ads-management',
  templateUrl: './ads-management.component.html',
  styleUrls: ['./ads-management.component.scss']
})
export class AdsManagementComponent  implements OnInit, OnDestroy {

  myAd: Ads
  ad_id: Number;
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private adsService: AdsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.ad_id = Number(params.get("ad_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.adsService.getAd(Number(this.ad_id)).subscribe((data: any) => {
      this.myAd = <Ads> data;
    })
  }

}
