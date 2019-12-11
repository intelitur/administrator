import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
export interface PeriodicElement {
  name: string;
  position: number;
  status: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arenal Lake Premium Package', status: true},
  {position: 2, name: 'Gastronomic Adventure La Fortuna', status: true},
  {position: 3, name: 'In love with the Mountain', status: true},
  {position: 4, name: 'Sports in La Fortuna, Why Not?', status: true},
  {position: 5, name: 'Souvenirs Journey', status: true},
  {position: 6, name: 'Typical Foods taste time', status: true},
  {position: 7, name: 'Get Close to the Fauna', status: true},
  {position: 8, name: 'VIP Relaxing Package', status: true},
  {position: 9, name: 'Thermal Waters Experience', status: true},
  {position: 10, name: 'Going to the Party Package', status: true},
];

@Component({
  selector: 'app-itineraries-table',
  templateUrl: './itineraries-table.component.html',
  styleUrls: ['./itineraries-table.component.scss']
})
export class ItinerariesTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  openShowItineraryDetails() {
    //this._dialog.openItineraryDetailsDialog();
  }
}
