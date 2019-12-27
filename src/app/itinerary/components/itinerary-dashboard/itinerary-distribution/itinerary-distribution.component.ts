import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  @Input() it;
  ngOnInit(): void {
  }

  offertFilter = '';
  checked: boolean = false;
  newOffersList = ["Booking", "Fire","Swing"]

  myControlOffers = new FormControl();
  filteredOptionsOffers: Observable<string[]>;
  promotionsDay3 = ["Promotion", "Promotion", "Promotion"];
  constructor(private _dialog: DialogManagerService) { }
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
  }}

}
