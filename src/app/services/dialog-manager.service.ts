import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItineraryFormDialogComponent } from '../itinerary-dashboard/itinerary-form-dialog/itinerary-form-dialog.component';
import { Observable } from 'rxjs';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { RegisterBusinessManComponent } from '../login/register-business-man/register-business-man.component';
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

  /**
   * @funtion Open dialog to add admin
   */
  openAddAdminFormDialog(): void {
    this.dialog.open(AddAdminComponent, {
      panelClass: 'custom-dialog-add-admin'
    });
  }

  openAddBusinessmanFormDialog(): void {
    this.dialog.open(RegisterBusinessManComponent, {
      panelClass: 'custom-dialog-add-businessman'
    });
  }
}
