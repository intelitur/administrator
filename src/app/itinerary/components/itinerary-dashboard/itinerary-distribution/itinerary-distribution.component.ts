import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  private subscription: Subscription;
  constructor(
    public commonService: CommonService,
    public dialogService: DialogManagerService,
    //public dialog: MatDialog,
    public itineraryService: ItineraryService
  ) {}
  @Input() it: any;
  ngOnInit(): void {
  }

  setAvailable(state: boolean, itineraryID: number, info: any) {
    let modifyInfo = info;
    modifyInfo.active = state;
    this.subscription = this.itineraryService
      .changeActiveState(itineraryID, modifyInfo)
      .subscribe({
        next: (data: any) => {
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

          //let idx = this.itineraryService.users.findIndex(user => user.user_id === userID);
          //this.itineraryService.users[idx].info.available = state;
        },
        error: (err: HttpErrorResponse) =>
         this.commonService.openSnackBar(`Error: ${err}`, "OK")

      });
  }
}
