import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItineraryFormDialogComponent } from '../itinerary-dashboard/itinerary-form-dialog/itinerary-form-dialog.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(public dialog: MatDialog) { }

  openItineraryFormDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ItineraryFormDialogComponent, {
      panelClass: 'custom-dialog'
    });

    return dialogRef.afterClosed();
  }
}
