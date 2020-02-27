import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/Company';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, OnDestroy {
  
  companySubscription: Subscription
  
  company_id: Number;

  company: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    public _auth: AuthService
  ) { }

  ngOnInit() {
    this.companySubscription = this.route.paramMap.subscribe((params) => {
      this.company_id = Number(params.get("company_id"));
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.companySubscription.unsubscribe();
  }


  recharge(){
    this.companyService.getCompany(Number(this.company_id)).subscribe((data: any) => {
      this.company = <Company> data;
      
    })
  }

}
