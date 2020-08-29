import { Component, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table"; 
import { OfferService } from "src/app/offers/services/offer.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
import { Filter } from "src/app/itinerary/models/Filter.interface";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
@Component({
  selector: "app-offers-table",
  templateUrl: "./offers-table.component.html",
  styleUrls: ["./offers-table.component.scss"]
})
export class OffersTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;
  filterItinerariesSubs: Subscription;
  dialogSubscription: Subscription;
  isFilters: boolean = false;
  constructor(
    private _dialog: DialogManagerService,
    private _offers : OfferService,
    private _common: CommonService,
    public sesionService: UserService
  ) {}

  ngOnInit() {
    this.getItinerariesMinimalInfo();
  }
  /**
   * @function get minimal info of itinerary
   */
  getItinerariesMinimalInfo() {
    this.subscription = this._offers
      .getOffers("o","")
      .subscribe({
        next: (data: any) => {
          console.log(data);
          
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    this.isFilters = false;
  }

  /**
   * @function open filter dialog
   */
  openShowFilterOptionsDialog() {
    this.dialogSubscription = this._dialog.openFilterOptionsDialog().subscribe({
      next: (filters: Filter) => {
        if(filters) {
          this.filterItinerariesSubs = this._offers
            .filterItineraries(filters)
            .subscribe({
              next: (response: ResponseInterface) => {
                this.dataSource = new MatTableDataSource(response.data);
              },
              error: (err: HttpErrorResponse) => this._common.handleError(err)
            });
          this.isFilters = true;
        }
      }
    });
  }

  /**
   * @function apply filter
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.dialogSubscription) this.dialogSubscription.unsubscribe();
  }
  /**
   * @funtion Assign id of itinerary to will used in other components
   * @param id
   */
  assignOfferId(id: number, name:string, descrpcion:string) {
    this._offers.offer_id = id;
    this._offers.offer_name = name;
    this._offers.offer_descripcion = descrpcion;
  }
}
