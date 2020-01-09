import { Component, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
import { Filter } from "src/app/itinerary/models/Filter.interface";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
@Component({
  selector: "app-itineraries-table",
  templateUrl: "./itineraries-table.component.html",
  styleUrls: ["./itineraries-table.component.scss"]
})
export class ItinerariesTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;
  filterItinerariesSubs: Subscription;
  dialogSubscription: Subscription;
  constructor(
    private _dialog: DialogManagerService,
    private _itinerary: ItineraryService,
    private _common: CommonService,
    public sesionService: UserService
  ) {}

  ngOnInit() {
    console.log(this.sesionService.actualUser);
    this.subscription = this._itinerary
      .getItineraryMinimalInfoByUser(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data.data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  openShowFilterOptionsDialog() {
    this.dialogSubscription = this._dialog.openFilterOptionsDialog().subscribe({
      next: (filters: Filter) =>
        (this.filterItinerariesSubs = this._itinerary
          .filterItineraries(filters)
          .subscribe({
            next: (response: ResponseInterface) => 
              this.dataSource = new MatTableDataSource(response.data),
            error: (err: HttpErrorResponse) => this._common.handleError(err)
          }))
    });
  }

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
  assignItineraryId(id: number) {
    this._itinerary.itinerary_id = id;
  }
}
