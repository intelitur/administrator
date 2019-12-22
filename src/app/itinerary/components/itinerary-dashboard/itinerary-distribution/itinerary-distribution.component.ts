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
    console.log(this.it);
  }

  offertFilter = '';
  checked: boolean = false;
  newOffersList = ["Booking", "Fire","Swing"]

  myControlOffers = new FormControl();
  filteredOptionsOffers: Observable<string[]>;
  offersDay1 = ["Walking", "Lunch", "Dinner"];
  offersDay2 = ["Biking tour", "Afternoon chill", "BreakFast"];
  offersDay3 = ["Extreme canopy", "Souvenir time", "Horse tour"];

  promotionsDay1 = ["Promotion", "Promotion", "Promotion"];
  promotionsDay2 = ["Promotion", "Promotion", "Promotion"];
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
  /**
   * @function Delete an offer item from a day of offers
   * @param itemIndex Index of the item
   * @param offerIndex Index of the day in offersDays list
   */
  /*deleteOfferItem(itemIndex, offerIndex) {
    this.offersDays[offerIndex].splice(itemIndex, 1);
  }*/

  /**
   * @function Delete a promotion item from a day of promotions
   * @param itemIndex Index of the item
   * @param promotionIndex Index of the day in promotionsDays list
   */
  /*deletePromotionItem(itemIndex, promotionIndex) {
    this.promotionsDays[promotionIndex].splice(itemIndex, 1);
  }*/

  /**
   * @function Delete a day from offersDays list
   * @param index Index of the day in promotionsDays list
   */
  /*deleteOfferDay(index) {
    if (index > -1) {
      this.offersDays.splice(index, 1);
    }
  }*/

}
