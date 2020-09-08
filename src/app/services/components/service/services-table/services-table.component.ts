import { Component, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table"; 
import { ServiceService } from "src/app/services/services/service.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
import { Filter } from "src/app/itinerary/models/Filter.interface";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
@Component({
  selector: "app-services-table",
  templateUrl: "./services-table.component.html",
  styleUrls: ["./services-table.component.scss"]
})
export class OffersTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;
  filterItinerariesSubs: Subscription;
  dialogSubscription: Subscription;
  isFilters: boolean = false;
  //Slide Toggle
  liked:boolean = true;
  viewed:boolean = true;
  reserved:boolean = true;
  favorite:boolean = true;
  constructor(
    private _dialog: DialogManagerService,
    private _service : ServiceService,
    private _common: CommonService,
    public sesionService: UserService
  ) {}

  ngOnInit() {
    this.getServices();
  }

    /**
   * @function get minimal info of itinerary
   */
  getServices() {
    this.subscription = this._service
      .getServices()
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
   * @function get minimal info of itinerary
   */
  getOffersByUser() {
    this.subscription = this._service
      .getOffersByUser(this.sesionService.actualUser.user_id,this.liked, this.viewed,this.reserved,this.favorite)
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
          this.filterItinerariesSubs = this._service
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
    this._service.offer_id = id;
    this._service.offer_name = name;
    this._service.offer_descripcion = descrpcion;
  }
}
