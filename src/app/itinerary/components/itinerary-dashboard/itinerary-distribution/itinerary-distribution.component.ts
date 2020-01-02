import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  @Input() it: any;
  ngOnInit(): void {
  }
}
