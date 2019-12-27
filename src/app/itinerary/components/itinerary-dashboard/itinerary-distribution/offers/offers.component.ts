import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { CommonService } from "src/app/general-services/common.service";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription } from "rxjs";
import { Itinerary } from "src/app/itinerary/models/Itinerary";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"]
})
export class OffersComponent implements OnInit, OnDestroy {
  result = ["el"];

  offersDay1 = ["Walking", "Lunch", "Dinner"];
  offersDay2 = ["Biking tour", "Afternoon chill", "BreakFast"];
  offersDay3 = ["Extreme canopy", "Souvenir time", "Horse tour"];
  days: Array<any> = [];
  @Input() it: Itinerary;
  subscription: Subscription;
  constructor(
    public commonService: CommonService,
    private _dialog: DialogManagerService,
    private _itinerary: ItineraryService
  ) {}

  ngOnInit() {
    this.getDaysInfo();
  }

  getDaysInfo() {
    for (let i = 0; i < this.it.info.duration; i++) {
      this.subscription = this._itinerary
        .getDayInfo(this._itinerary.itinerary_id, i)
        .subscribe({
          next: (data: any) => {
            if (data.data.day !== null) {
              this.days.push(data.data);
              this.sortArray();
            }
          },
          error: (err: HttpErrorResponse) => this.commonService.handleError(err)
        });
    }
  }

  sortArray() {
    this.days.sort((a, b): number => {
      if (a.day[0].day_number > b.day[0].day_number) return 1;
      if (a.day[0].day_number < b.day[0].day_number) return -1;
      // a must be equal to b
      return 0;
    });
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
  /**
   * @funtion delete day by name and clean list
   * @param day
   */
  deleteDay(day) {
    switch (day) {
      case "dia1": {
        this.offersDay1 = [];
        break;
      }
      case "dia2": {
        this.offersDay2 = [];
        break;
      }
      case "dia3": {
        this.offersDay3 = [];
        break;
      }
    }
    document
      .getElementById(day)
      .parentNode.removeChild(document.getElementById(day));
    this.commonService.openSnackBar(
      `Se ha eliminado correctamente el ${day}`,
      "OK"
    );
  }
  /**
   * @funtion delete offert by item and listIndicator that is 1 is list 1 and so on...
   * @param item
   * @param listIndicator
   */
  deleteOffert(item: string, listIndicator: number) {
    switch (listIndicator) {
      case 1: {
        this.offersDay1 = this.offersDay1.filter(i => i !== item);
        break;
      }
      case 2: {
        this.offersDay2 = this.offersDay2.filter(i => i !== item);
        break;
      }
      case 3: {
        this.offersDay3 = this.offersDay3.filter(i => i !== item);
        break;
      }
    }

    this.commonService.openSnackBar(
      `Se ha eliminado correctamente la oferta ${item}`,
      "OK"
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
