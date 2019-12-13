import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-itinerary-distribution',
  templateUrl: './itinerary-distribution.component.html',
  styleUrls: ['./itinerary-distribution.component.scss']
})
export class ItineraryDistributionComponent implements OnInit {

  offertFilter = '';

  newOffersList = ["Booking", "Fire","Swing"]

  myControlOffers = new FormControl();
  filteredOptionsOffers: Observable<string[]>;
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
    this.filteredOptionsOffers = this.myControlOffers.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    // Merge all offers in one list
    const filterValue = value.toLowerCase();
    let offersConcat = this.offersDay1.concat(this.offersDay2,this.offersDay3);
    return offersConcat.filter(option => option.toLowerCase().includes(filterValue));
  }

}
