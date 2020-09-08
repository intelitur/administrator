import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';

@Component({
  selector: 'app-services-dashboard',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class Services_ServicesComponent implements OnInit {

  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  openServicesDialog() {
    this._dialog.openServiceFormDialog();
  }

}
