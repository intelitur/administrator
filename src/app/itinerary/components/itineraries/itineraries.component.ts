import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';

@Component({
  selector: 'app-itinerary-dashboard',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  openItineraryDialog() {
    this._dialog.openItineraryFormDialog();
  }

}
