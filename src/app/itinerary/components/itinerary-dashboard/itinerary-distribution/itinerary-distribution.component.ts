import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { UserService } from "src/app/users/services/user.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"],
})
export class ItineraryDistributionComponent implements OnInit {
  private subscription: Subscription;
  favorites: Array<number> = [];
  constructor(
    public commonService: CommonService,
    public sesionService: UserService,
    public dialogService: DialogManagerService,
    public itineraryService: ItineraryService
  ) {}
  @Input() it: any;
  ngOnInit(): void {
    this.subscription = this.itineraryService
      .getFavoriteItinerary(this.sesionService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          if (data.data.length > 0) {
            this.favorites = data.data[0].get_favorite_itinerary;
          }
        },
        error: (err: HttpErrorResponse) => this.commonService.handleError(err),
      });
  }
  /**
   * @function set available
   * @param state: boolean
   * @param itineraryID: number
   * @param info: any
   */
  setAvailable(state: boolean, itineraryID: number, info: any, {source}: any) {
    let action;
    state ? (action = "activar") : (action = "desactivar");
    this.commonService
      .confirmationDialog(`¿Desea ${action} el itinerario?`)
      .then(async (result) => {
        if (result) {
          let modifyInfo = info;
          modifyInfo.active = state;
          this.subscription = this.itineraryService
            .changeActiveState(itineraryID, modifyInfo)
            .subscribe({
              next: () => {
                if (state) {
                  this.commonService.openSnackBar(
                    `El itinerario ${itineraryID} ha sido habilitado`,
                    "OK"
                  );
                } else {
                  this.commonService.openSnackBar(
                    `El itinerario ${itineraryID} ha sido desabilitado`,
                    "OK"
                  );
                }
                this.subscription.unsubscribe();
              },
              error: (err: HttpErrorResponse) =>
                this.commonService.openSnackBar(`Error: ${err}`, "OK"),
            });
        } else {
          source.checked = !state
        }
      });
  }

  /**
   * @function add favorite from itinerary
   * @param itineraryID: number
   */
  addFavoriteItinerary(itineraryID: number) {
    this.favorites.push(itineraryID);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this.itineraryService
      .addFavoriteItinerary(itineraryID, userID)
      .subscribe({
        next: () => {
          this.commonService.openSnackBar(
            `El itinerario ${itineraryID} ha sido agregado a favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }
  /**
   * @function remove favorite from itinerary
   * @param itineraryID: number
   */
  removeFavoriteItinerary(itineraryID: number) {
    this.favorites.splice(this.favorites.indexOf(itineraryID, 0), 1);
    let userID = this.sesionService.actualUser.user_id;
    this.subscription = this.itineraryService
      .removeFavoriteItinerary(itineraryID, userID)
      .subscribe({
        next: () => {
          this.commonService.openSnackBar(
            `El itinerario ${itineraryID} ha sido removido de favoritos`,
            "OK"
          );
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }
}
