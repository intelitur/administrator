import { Component, OnInit, Inject } from "@angular/core";
import { Itinerary } from "src/app/itinerary/models/Itinerary";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-itinerary-details",
  templateUrl: "./itinerary-details.component.html",
  styleUrls: ["./itinerary-details.component.scss"]
})
export class ItineraryDetailsComponent implements OnInit {
  images = [
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-mint-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-mint-green-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1366x768/1366x768-navy-purple-solid-color-background.jpg"
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public it: Itinerary) {}

  ngOnInit() {}
}
