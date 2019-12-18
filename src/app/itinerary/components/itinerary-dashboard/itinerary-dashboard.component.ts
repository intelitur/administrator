import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-itinerary-details",
  templateUrl: "./itinerary-dashboard.component.html",
  styleUrls: ["./itinerary-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryDashboardComponent implements OnInit {
  checked: boolean = false;
  constructor() {}

  ngOnInit() {
  }
}
