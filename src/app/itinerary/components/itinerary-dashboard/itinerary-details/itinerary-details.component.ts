import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.scss']
})
export class ItineraryDetailsComponent implements OnInit {
  images = [
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-mint-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-mint-green-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1366x768/1366x768-navy-purple-solid-color-background.jpg"
  ]
  constructor() { }

  ngOnInit() {
  }

}
