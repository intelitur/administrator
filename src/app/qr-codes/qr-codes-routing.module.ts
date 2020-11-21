import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllQrCodesComponent } from './components/all-qr-codes/all-qr-codes.component';
import { QrCodesRootComponent } from './qr-codes-root.component';

const routes: Routes = [
  {
    path: "qr-codes",
    component: QrCodesRootComponent,
    children: [
      {
        path: "all",
        component: AllQrCodesComponent
      }
    ]
  }
];

export const QRCodesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
