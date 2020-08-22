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
    //this.obtainAllAds()
  }

  obtainAllAds(){
    this.isFilters = false
    this.subscription = this.adsService.getAllAds()
    .subscribe({
      next: (data: any) => {
        this.adsService.ads = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  changeState(ad: Ads, {source}: any){
    var id = {
      ad_id: ad.ad_id
    }
    this.adsService.changeStateAd(id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          ad.is_active = !ad.is_active;
          source.checked = ad.is_active
          if (ad.is_active)
            this.commonService.openSnackBar(
              `La categoría ${ad.name} ha sido activada`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `La categoría ${ad.name} ha sido desactivada`,
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
    const dialog = this.dialogService.open(AdsCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      console.log(data)
    })
  }
}
