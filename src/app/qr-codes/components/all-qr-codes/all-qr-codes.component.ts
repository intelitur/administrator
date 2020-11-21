import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { QRCode } from '../../models/qr-code';
import { QrCodesService } from '../../services/qr-codes.service';

@Component({
  selector: 'app-all-qr-codes',
  templateUrl: './all-qr-codes.component.html',
  styleUrls: ['./all-qr-codes.component.scss']
})
export class AllQrCodesComponent implements OnInit {

  subscription: Subscription;

  constructor(
    public qrCodesService: QrCodesService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.getQRs()
  }

  getQRs(){
    this.subscription = this.qrCodesService.getQRCodes().subscribe({
      next: (data: any) => {
        this.qrCodesService.qrCodes = data
        this.subscription.unsubscribe()
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    })
  }

  openDialog(action: boolean, data?: QRCode){

  }

  delete(qrCode: QRCode){

  }
}
