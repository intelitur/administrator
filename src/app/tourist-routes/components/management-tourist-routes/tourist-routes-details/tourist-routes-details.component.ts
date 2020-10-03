import { Component, Input, OnInit } from '@angular/core';
import { TouristRoute } from 'src/app/tourist-routes/models/tourist-route';

@Component({
  selector: 'app-tourist-routes-details',
  templateUrl: './tourist-routes-details.component.html',
  styleUrls: ['./tourist-routes-details.component.scss']
})
export class TouristRoutesDetailsComponent implements OnInit {

  @Input() myRoute: TouristRoute;
   
  constructor() { }

  ngOnInit() {
  }

}
