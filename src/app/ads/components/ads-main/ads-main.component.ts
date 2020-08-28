import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { MatDialog } from '@angular/material';
import { Ads } from '../../models/Ads';
import { AdsCreateComponent } from '../ads-create/ads-create.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ads-main',
  templateUrl: './ads-main.component.html',
  styleUrls: ['./ads-main.component.scss']
})
export class AdsMainComponent implements OnInit {

  filter: any = {
    name: ""
  };
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public commonService: CommonService,
    public dialogService: MatDialog,
    public adsService: AdsService
  ) { }

  ngOnInit() {
  }

  changeState(ad: Ads, {source}: any){
    this.adsService.changeStateAd(ad.ad_id).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          ad.is_active = !ad.is_active;
          source.checked = ad.is_active
          if (ad.is_active)
            this.commonService.openSnackBar(
              `El anuncio ${ad.name} ha sido activado`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `El anuncio ${ad.name} ha sido desactivado`,
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
        source.checked = ad.is_active
      }
    });
  }

  openCreateDialog(){
    this.dialogService.open(AdsCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
  }
}
