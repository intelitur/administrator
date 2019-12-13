import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  result = ["el"];

  offersDay1 = ["Walking", "Lunch", "Dinner"];
  offersDay2 = ["Biking tour", "Afternoon chill", "BreakFast"];
  offersDay3 = ["Extreme canopy", "Souvenir time", "Horse tour"];
  constructor(private _dialog: DialogManagerService) { }

  ngOnInit() {
  }

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

  openDayDetails() {
    this._dialog.openDayDetailsDialog();
  }

}
