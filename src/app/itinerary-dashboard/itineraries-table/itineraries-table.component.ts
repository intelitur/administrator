import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arenal Lake Premium Package', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Gastronomic Adventure La Fortuna', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'In love with the Mountain', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Sports in La Fortuna, Why Not?', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Souvenirs Journey', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Typical Foods taste time', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Get Close to the Fauna', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'VIP Relaxing Package', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Thermal Waters Experience', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Going to the Party Package', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-itineraries-table',
  templateUrl: './itineraries-table.component.html',
  styleUrls: ['./itineraries-table.component.scss']
})
export class ItinerariesTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
