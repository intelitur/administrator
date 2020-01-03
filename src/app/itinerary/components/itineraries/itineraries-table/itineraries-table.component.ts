import { Component, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from 'src/app/users/services/user.service';
@Component({
  selector: "app-itineraries-table",
  templateUrl: "./itineraries-table.component.html",
  styleUrls: ["./itineraries-table.component.scss"]
})
export class ItinerariesTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource; /*= new MatTableDataSource(ELEMENT_DATA);*/
  subscription: Subscription;
  constructor(
    private _dialog: DialogManagerService,
    private _itinerary: ItineraryService,
    private _common: CommonService,
    public sesionService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this._itinerary
      .getItineraryMinimalInfoByUser(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data.data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  openShowItineraryDetails() {
    //this._dialog.openItineraryDetailsDialog();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * @funtion Assign id of itinerary to will used in other components
   * @param id
   */
  assignItineraryId(id: number) {
    this._itinerary.itinerary_id = id;
  }
}
