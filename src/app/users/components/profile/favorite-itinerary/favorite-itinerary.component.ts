import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { CommonService } from 'src/app/general-services/common.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatTableDataSource } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-favorite-itinerary',
  templateUrl: './favorite-itinerary.component.html',
  styleUrls: ['./favorite-itinerary.component.scss']
})
export class FavoriteItineraryComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource; /*= new MatTableDataSource(ELEMENT_DATA);*/
  subscription: Subscription;

  constructor(
    private _dialog: DialogManagerService,
    private _itinerary: ItineraryService,
    private _common: CommonService,
    public sesionService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this._itinerary
    .getFavoriteItineraryMinimalInfoByUser(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data.data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeItineraryFavorite(itineraryID: number) {
    this.dataSource.filteredData.splice(this.dataSource.filteredData.indexOf(itineraryID, 0), 1);
    this.dataSource = new MatTableDataSource(this.dataSource.filteredData);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this._itinerary
      .removeFavoriteItinerary(itineraryID, userID)
      .subscribe({
        next: () => {
          this._common.openSnackBar(
            `El itinerario ${itineraryID} ha sido eliminado de favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this._common.openSnackBar(`Error: ${err}`, "OK")
      });
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
