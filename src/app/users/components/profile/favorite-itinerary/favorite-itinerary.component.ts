import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;

  constructor(
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
  /**
   * @function apply filter
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * @function remove favarite from itinerary
   */
  removeItineraryFavorite(itineraryID: number, elementIndex: number) {
    this.dataSource.filteredData.splice(elementIndex, 1);
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
        },
        error: (err: HttpErrorResponse) =>
          this._common.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  ngOnDestroy() {
    if(this.subscription)
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
