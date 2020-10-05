import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contests } from '../../models/Contest';
import { ContestsService } from '../../services/contests.service';

@Component({
  selector: 'app-contests-management',
  templateUrl: './contests-management.component.html',
  styleUrls: ['./contests-management.component.scss']
})
export class ContestsManagementComponent implements OnInit {

  contest: Contests
  contest_id: Number;
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private contestsService: ContestsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.contest_id = Number(params.get("contest_id"));
      //this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.contestsService.getContest(Number(this.contest_id)).subscribe((data: any) => {
      this.contest = <Contests> data;
    })
  }

}
