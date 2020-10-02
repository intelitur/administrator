import { Component, Input, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table"; 
import { OfferService } from "src/app/offers/services/offer.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
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
  @Input() active:boolean = true;
  constructor(
    private _dialog: DialogManagerService,
    private _offers : OfferService,
    private _common: CommonService,
    public sesionService: UserService
  ) {}

  ngOnInit() {
    this.getOffers();
  }
  isActive(){
    if(this.active){
      return true;
    }
    else{
      this.active = true;
      this.getOffers();
      return true;
    }
  }
  /**
   * @function get all offers
   */
  getOffers() {
    this.subscription = this._offers
      .getOffers()
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    this.isFilters = false;
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
   * 
   * @param id @funtion Assign id, name, description of offer  to will used in other components
   * @param name 
   * @param description 
   */
  assignOfferId(id: number, name:string, description:string) {
    this._offers.offer_id = id;
    this._offers.offer_name = name;
    this._offers.offer_description = description;
  }
}
