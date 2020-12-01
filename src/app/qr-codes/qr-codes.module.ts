import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodesRootComponent } from './qr-codes-root.component';
import { QRCodesRoutingModule } from './qr-codes-routing.module';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AllQrCodesComponent } from './components/all-qr-codes/all-qr-codes.component';
import { CreateModifyQrCodesComponent } from './components/create-modify-qr-codes/create-modify-qr-codes.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    QrCodesRootComponent,
    AllQrCodesComponent,
    CreateModifyQrCodesComponent
  ],
  imports: [
    CommonModule,
    QRCodesRoutingModule,
    SharedModule,
    FormsModule,
    FilterPipeModule,
    QRCodeModule 
  ],
  entryComponents: [CreateModifyQrCodesComponent]
})
export class QrCodesModule { }
