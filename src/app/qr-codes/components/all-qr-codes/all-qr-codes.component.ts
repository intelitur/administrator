import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';
import { QRCode } from '../../models/qr-code';
import { QrCodesService } from '../../services/qr-codes.service';
import { CreateModifyQrCodesComponent } from '../create-modify-qr-codes/create-modify-qr-codes.component';

@Component({
  selector: 'app-all-qr-codes',
  templateUrl: './all-qr-codes.component.html',
  styleUrls: ['./all-qr-codes.component.scss']
})
export class AllQrCodesComponent implements OnInit {

  subscription: Subscription;
  url: string = environment.USER_WEB + "?qr="

  constructor(
    public qrCodesService: QrCodesService,
    public commonService: CommonService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getQRs()
  }

  getQRs(){
    this.subscription = this.qrCodesService.getQRCodes().subscribe({
      next: (data: any) => {
        console.log(data)
        this.qrCodesService.qrCodes = data
        this.subscription.unsubscribe()
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    })
  }

  openDialog(action: boolean, data?: QRCode){
    let dialogRef: MatDialogRef<CreateModifyQrCodesComponent>;
    dialogRef = this.dialog.open(CreateModifyQrCodesComponent, {
      height: "70%",
      width: "60%",
      disableClose: true,
      data: {
        qr: data,
        action: action,
      },
    });
  }

  delete(qrCode: QRCode){
    this.commonService
    .confirmationDialog(`¿Desea eliminar el código?`)
    .then(async (result) => {
      if (result) {
        this.qrCodesService.delete(qrCode.qr_id).subscribe({
          next: (data: any) => {
            if(data.status == 204) {
              this.commonService.openSnackBar("Se ha eliminado el código QR", "OK");
              this.getQRs()
            }else{
              this.commonService.openSnackBar(
                "Ha ocurrido un error al intentar eliminar el código QR",
                "OK"
              );
              console.log(data.error);
            }
          },
          error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        })
      }
    })
  }
}
