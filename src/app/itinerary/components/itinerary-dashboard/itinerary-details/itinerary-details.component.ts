import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-itinerary-details",
  templateUrl: "./itinerary-details.component.html",
  styleUrls: ["./itinerary-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItineraryDetailsComponent implements OnInit {
  checked: boolean = false;
  offersDay1 = ["Walking", "Lunch", "Dinner"];
  offersDay2 = ["Biking tour", "Afternoon chill", "BreakFast"];
  offersDay3 = ["Extreme canopy", "Souvenir time", "Horse tour"];

  promotionsDay1 = ["Promotion", "Promotion", "Promotion"];
  promotionsDay2 = ["Promotion", "Promotion", "Promotion"];
  promotionsDay3 = ["Promotion", "Promotion", "Promotion"];
  constructor(public dialogRef: MatDialogRef<ItineraryDetailsComponent>) {}

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

  ngOnInit() {}
}
