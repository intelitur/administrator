import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  checked: boolean = false;

  constructor(private _dialog: DialogManagerService) {}

  ngOnInit() {}

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

  openDayDetails() {
    this._dialog.openDayDetailsDialog();
  }
}
