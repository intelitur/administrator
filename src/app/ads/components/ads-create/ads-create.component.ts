import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { Ads } from '../../models/Ads';
import { AdsService } from '../../services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-create',
  templateUrl: './ads-create.component.html',
  styleUrls: ['./ads-create.component.scss']
})
export class AdsCreateComponent implements OnInit {

  adsFG: FormGroup;
  companies: any;
  private subscription: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  today: any = new Date();

  constructor(
    public dialogRef: MatDialogRef<AdsCreateComponent>,
    public companyService: CompanyService,
    public commonService: CommonService,
    public adsService: AdsService,
    private router: Router
  ) { 
    this.adsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit() {

    //Carga las compañías
    this.subscription = this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        this.companies = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  onSubmit(){
    let ad: Ads = {
      name: this.adsFG.controls['name'].value,
      description: this.adsFG.controls['description'].value,
      company_id: this.adsFG.controls['company'].value,
      initial_date: this.start_Date,
      final_date: this.end_Date
    }
    this.createAd(ad);
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }

  createAd(ad: Ads){
    this.adsFG.disable();
    this.adsService.createAd(ad).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.commonService.openSnackBar(
            `La categoría ${this.adsFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate([`/category/all`])
        } else {  
          this.commonService.openSnackBar(
            `Error al crear la categoría: ${data.error}`,
            "OK"
          );
          this.adsFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.adsFG.enable()
      }
    });
  }
}
