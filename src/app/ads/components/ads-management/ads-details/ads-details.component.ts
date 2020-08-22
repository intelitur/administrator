import { Component, OnInit, Input } from '@angular/core';
import { Ads } from 'src/app/ads/models/Ads';
import { Subscription } from 'rxjs';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdsService } from 'src/app/ads/services/ads.service';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.scss']
})
export class AdsDetailsComponent implements OnInit {

  @Input() myAd: Ads;
  adFG: FormGroup;
  companies: any;
  private subscription: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  loading = false;

  constructor(
    public companyService: CompanyService,
    public commonService: CommonService,
    public adsService: AdsService
  ) {
    this.adFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
    this.subscription = this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        this.companies = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
    this.setData()
  }

  setData(){
    this.adFG.controls['name'].setValue(this.myAd.name)
    this.adFG.controls['description'].setValue(this.myAd.description)
    this.adFG.controls['company'].setValue(this.myAd.company_id)
    this.start_Date = this.myAd.date_range.initial_date
    this.end_Date = this.myAd.date_range.final_date
  }

  changeState({source}: any){
    var id = this.myAd.ad_id
    
    this.adsService.changeStateAd(id).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.myAd.is_active = !this.myAd.is_active;
          source.checked = this.myAd.is_active
          if (this.myAd.is_active)
            this.commonService.openSnackBar(
              `El anuncio ${this.myAd.name} ha sido activado`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `El anuncio ${this.myAd.name} ha sido desactivado`,
              "OK"
            );
        } else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        source.checked = this.myAd.is_active
      }
    });
  }

  modifyAd(){
    this.loading = true;
    this.adFG.disable()
    let ad: Ads = {
      ad_id: this.myAd.ad_id,
      name: this.adFG.controls['name'].value,
      description : this.adFG.controls['description'].value,
      company_id: this.adFG.controls['company'].value,
      date_range: {
        initial_date: this.myAd.date_range.initial_date,
        final_date: this.myAd.date_range.final_date
      },
      is_active: this.myAd.is_active,
      latitude: this.myAd.latitude,
      longitude: this.myAd.longitude
    }

    this.adsService.modifyAd(ad).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.adFG.enable()
          this.myAd = ad;
          this.commonService.openSnackBar(
            `El anuncio ${this.myAd.name} ha sido cambiado`,
            "OK")
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }

      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.adFG.enable()
      }

    })

  }

  isChanged(): boolean {

    let ad: Ads = {
      ad_id: this.myAd.ad_id,
      name: this.adFG.controls['name'].value,
      description : this.adFG.controls['description'].value,
      company_id: this.adFG.controls['company'].value,
      date_range: {
        initial_date: this.myAd.date_range.initial_date,
        final_date: this.myAd.date_range.final_date
      },
      is_active: this.myAd.is_active,
      latitude: this.myAd.latitude,
      longitude: this.myAd.longitude
    }
    return !(JSON.stringify(this.myAd) === JSON.stringify(ad))
  }
}
