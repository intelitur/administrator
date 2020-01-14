import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Subscription, from } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { UserService } from 'src/app/users/services/user.service';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-favorite-offer',
  templateUrl: './favorite-offer.component.html',
  styleUrls: ['./favorite-offer.component.scss']
})
export class FavoriteOfferComponent implements OnInit {
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
    .getFavoriteOfferInfoByUser(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data.data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeOfferFavorite(offerID: number, elementIndex: number) {
    this.dataSource.filteredData.splice(elementIndex, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.filteredData);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this._itinerary
      .removeFavoriteOffer(offerID, userID)
      .subscribe({
        next: () => {
          this._common.openSnackBar(
            `La oferta ${offerID} ha sido eliminada de favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this._common.openSnackBar(`Error: ${err}`, "OK")
      });
  }
}
