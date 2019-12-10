import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';

@Component({
  selector: 'app-itinerary-dashboard',
  templateUrl: './itinerary-dashboard.component.html',
  styleUrls: ['./itinerary-dashboard.component.scss']
})
export class ItineraryDashboardComponent implements OnInit {

  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  openItineraryDialog() {
    this._dialog.openItineraryFormDialog();
  }

}
