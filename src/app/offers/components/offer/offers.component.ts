import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';

@Component({
  selector: 'app-offers-dashboard',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class Offers_ServicesComponent implements OnInit {

  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  openItineraryDialog() {
    //this._dialog.openItineraryFormDialog();
  }

}
