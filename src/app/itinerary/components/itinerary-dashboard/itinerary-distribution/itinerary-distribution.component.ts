import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-itinerary-distribution',
  templateUrl: './itinerary-distribution.component.html',
  styleUrls: ['./itinerary-distribution.component.scss']
})
export class ItineraryDistributionComponent implements OnInit {
  offersDay1 = ["Walking", "Lunch", "Dinner"];
  offersDay2 = ["Biking tour", "Afternoon chill", "BreakFast"];
  offersDay3 = ["Extreme canopy", "Souvenir time", "Horse tour"];

  promotionsDay1 = ["Promotion", "Promotion", "Promotion"];
  promotionsDay2 = ["Promotion", "Promotion", "Promotion"];
  promotionsDay3 = ["Promotion", "Promotion", "Promotion"];
  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit() {
  }

}
