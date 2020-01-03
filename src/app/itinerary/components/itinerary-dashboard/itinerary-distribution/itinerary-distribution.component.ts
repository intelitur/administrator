import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from 'rxjs';
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { SessionService } from 'src/app/general-services/session.service';

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  private subscription: Subscription;
  public favorites;
  constructor(
    public commonService: CommonService,
    public sesionService: SessionService,
    public dialogService: DialogManagerService,
    public itineraryService: ItineraryService
  ) {}
  @Input() it: any;
  ngOnInit(): void {
    //this.favorites = [8];
  }

  setAvailable(state: boolean, itineraryID: number, info: any) {
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
         this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  favoriteItinerary(itineraryID: number) {
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
         this.commonService.openSnackBar(`Error: ${err}`, "OK")});
  }
}
