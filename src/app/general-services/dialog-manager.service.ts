import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ItineraryFormDialogComponent } from "../itinerary/components/itinerary-dashboard/itinerary-form-dialog/itinerary-form-dialog.component";
import { ItineraryDetailsComponent } from '../itinerary/components/itinerary-dashboard/itinerary-details/itinerary-details.component';
@Injectable({
  providedIn: "root"
})
export class DialogManagerService {
  constructor(public dialog: MatDialog) {}

  openItineraryFormDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ItineraryFormDialogComponent, {
      panelClass: "custom-dialog"
    });

    return dialogRef.afterClosed();
  }

  openItineraryDetailsDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ItineraryDetailsComponent, {
      panelClass: "custom-dialog"
    });

    return dialogRef.afterClosed();
  }
}
