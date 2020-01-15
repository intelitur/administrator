import { Component, OnInit, Input } from "@angular/core";
import { Itinerary } from "src/app/itinerary/models/Itinerary";

@Component({
  selector: "app-itinerary-details",
  templateUrl: "./itinerary-details.component.html",
  styleUrls: ["./itinerary-details.component.scss"]
})
export class ItineraryDetailsComponent implements OnInit {
  @Input() it: Itinerary;
  data =  {
    local: false,
    images: []
  }
  constructor(
  ) {}

  ngOnInit() {
    console.log(this.it);
    this.data.images = this.it.imgs
  }
}
