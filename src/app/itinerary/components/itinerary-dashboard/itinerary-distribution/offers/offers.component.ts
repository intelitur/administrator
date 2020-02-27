import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { CommonService } from "src/app/general-services/common.service";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription, from } from "rxjs";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  tap,
  switchMap,
  finalize,
  groupBy,
  mergeMap,
  toArray
} from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserService } from "src/app/users/services/user.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"]
})
export class OffersComponent implements OnInit, OnDestroy {
  days: Array<any> = [];
  favorites: Array<number> = [];
  @Input() it: any;
  subscription: Subscription;
  formatArraySubscription: Subscription;
  deleteDaySubs: Subscription;
  searchOffersCTRL: FormControl = new FormControl();
  filteredOffers: any[];
  isLoading: boolean = false;
  daysDetails: Array<any> = [];
  constructor(
    public commonService: CommonService,
    public sesionService: UserService,
    private _itinerary: ItineraryService,
    private _dialog: DialogManagerService,
    private http: HttpClient
  ) {}

  /**
   * in this hook an observable is configured to filter offers based on
   * input value
   */
  ngOnInit() {
    this.days = new Array(this.it.info["duration"]);
    this.days = this.fillArray(this.it.info["duration"]);
    this.subscription = this._itinerary
      .getFavoriteOffer(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          if (data.data[0]) this.favorites = data.data[0].get_favorite_offer;
        },
        error: (err: HttpErrorResponse) => this.commonService.handleError(err)
      });
    if (this.it) {
      this.getDaysInfo();
      this.searchOffersCTRL.valueChanges
        .pipe(
          debounceTime(500),
          tap(() => {
            this.filteredOffers = [];
            this.isLoading = true;
          }),
          switchMap(value =>
            this.http
              .get(
                `${environment.SERVER_BASE_URL}itinerary/filterOffers?value=${value}&it_id=${this.it["itinerary_id"]}`
              )
              .pipe(
                finalize(() => {
                  this.isLoading = false;
                })
              )
          )
        )
        .subscribe((result: ResponseInterface) => {
          this.filteredOffers = result.data;
        });
    }
  }
  /**
   * @function fill array 
   */
  fillArray(duration: number): Array<any> {
    let array = [];
    for (let i = 1; i <= duration; i++) {
      array.push({ day_number: i, items: [] });
    }
    return array;
  }

  /**
   * @function add offer to favorite
   * @param offerID
   */
  addOfferFavorite(offerID: number) {
    this.favorites.push(offerID);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this._itinerary
      .addFavoriteOffer(offerID, userID)
      .subscribe({
        next: () => {
          this.commonService.openSnackBar(
            `La oferta ${offerID} ha sido agregado a favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  /**
   * @function add remove offer to favorite
   * @param offerID 
   */
  removeOfferFavorite(offerID: number) {
    this.favorites.splice(this.favorites.indexOf(offerID, 0), 1);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this._itinerary
      .removeFavoriteOffer(offerID, userID)
      .subscribe({
        next: () => {
          this.commonService.openSnackBar(
            `La oferta ${offerID} ha sido eliminada de favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  /**
   * is needed to add + 1 to represent day number
   * @param index represent day number
   */
  updateDayDistribution(day_number: number, index: number) {
    let distArray: Array<any> = this.days[index].items.map(
      (e: { offer_id: number; initial_time: string; final_time: string }) => {
        return {
          it: this.it["itinerary_id"],
          offer_id: e.offer_id,
          day_number: day_number,
          initial_time: "21:40:12.585447",
          final_time: "21:40:12.585447"
        };
      }
    );
    if (distArray.length === 0)
      distArray = [
        {
          it: this.it["itinerary_id"],
          day_number: index + 1,
          delete_all: true
        }
      ];

    this.subscription = this._itinerary
      .updateDayDistribution(distArray)
      .subscribe({
        next: (result: ResponseInterface) =>
          this.commonService.openSnackBar(result.message, "Ok"),
        error: (err: HttpErrorResponse) => this.commonService.handleError(err)
      });
  }

  /**
   * this method get all days for a specific itinerary
   */
  async getDaysInfo() {
    await this._itinerary
      .getDayInfo(this.it["itinerary_id"])
      .toPromise()
      .then((data: ResponseInterface) => {
        if (data.data.day !== null) {
          this.formatDaysArray(data.data.day);
        }
      })
      .catch((err: HttpErrorResponse) => this.commonService.handleError(err));

    this.subscription = this._itinerary
      .getDaysDetails(this.it["itinerary_id"])
      .subscribe({
        next: (result: ResponseInterface) => (this.daysDetails = result.data),
        error: (err: HttpErrorResponse) => this.commonService.handleError(err)
      });
  }

  /**
   * @function format days 
   * @param data: Array<any>
   */
  formatDaysArray(data: Array<any>) {
    let source = from(data);
    let obs = source.pipe(
      groupBy(d => d.day_number),
      // return each item in group as array
      mergeMap(group => group.pipe(toArray()))
    );

    this.formatArraySubscription = obs.subscribe({
      next: (val: any) => {
        if(this.days[val[0].day_number - 1])
          this.days[val[0].day_number - 1].items = val;
      }
    });
  }
  /**
   * @function fillEmptyDays 
   * @param duration: number
   */
  fillEmptyDays(duration: number) {
    for (let i = 1; i <= duration; i++) {
      this.days.push({
        day_number: i
      });
    }
  }

  /**
   * @function method needed to sort an array of days
   * This is needed because in some cases the second promise respond first
   */
  sortArray() {
    this.days.sort((a, b): number => {
      if (a.day[0] && b.day[0] && a.day[0].day_number > b.day[0].day_number)
        return 1;
      if (a.day[0] && b.day[0] && a.day[0].day_number < b.day[0].day_number)
        return -1;
      // a must be equal to b
      return 0;
    });
  }
  /**
   * @function drop offer
   */
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
   * @function delete day
   * @param day_number: number
   * @param index: number
   */
  deleteDay(day_number: number, index: number) {
    this.deleteDaySubs = this._itinerary
      .deleteDay(this.it["itinerary_id"], day_number)
      .subscribe({
        next: (result: ResponseInterface) => {
          this.commonService.openSnackBar(result.message, "Ok");
          this.days.splice(index, 1);
        },
        error: (err: HttpErrorResponse) => this.commonService.handleError(err)
      });
  }
  /**
   * @function add day
   */
  addDay() {
    this._dialog
      .openCreateDay({
        details: "",
        id_itinerary: this.it["itinerary_id"],
        day_number: this.days.length + 1,
        duration: this.it.info["duration"]
      })
      .subscribe({
        next: (createdDay: any) => {
          this.days.push({day_number: createdDay.day_number, items: []});
          this.daysDetails.push({details: createdDay.details})
        }
      });
  }
  /**
   * @function unlink offer
   * @param offer_id: number
   * @param day_number: number
   * @param offer_index: number
   * @param day_index: number
   */
  unlinkOffer(
    offer_id: number,
    day_number: number,
    offer_index: number,
    day_index: number
  ) {
    this.subscription = this._itinerary
      .unlinkOffer(offer_id, this.it["itinerary_id"], day_number)
      .subscribe({
        next: (result: ResponseInterface) => {
          this.commonService.openSnackBar(result.message, "Ok");
          this.days[day_index].items.splice(offer_index, 1);
        },
        error: (err: HttpErrorResponse) => this.commonService.handleError(err)
      });
  }
  /**
   * @function open day details 
   * @param i:number
   */
  openDayDetails(i: number) {
    this._dialog.openShowDayDetails(this.daysDetails[i].details);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.formatArraySubscription)
      this.formatArraySubscription.unsubscribe();
  }
}
