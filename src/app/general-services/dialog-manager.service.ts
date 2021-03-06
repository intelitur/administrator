import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AddAdminComponent } from "../users/components/add-admin/add-admin.component";
import { RegisterBusinessManComponent } from "../login/register-business-man/register-business-man.component";
import { ItineraryFormDialogComponent } from "../itinerary/components/itineraries/itinerary-form-dialog/itinerary-form-dialog.component";
import { CreateDayComponent } from "../itinerary/components/itinerary-dashboard/itinerary-distribution/create-day/create-day.component";
import { ShowDayDetailsComponent } from "../itinerary/components/itinerary-dashboard/itinerary-distribution/show-day-details/show-day-details.component";
import { ForgotPasswordComponent } from "../login/forgot-password/forgot-password.component";
import { FilterOptionsDialogComponent } from "../itinerary/components/itineraries/itineraries-table/filter-options-dialog/filter-options-dialog.component";
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

  openFilterOptionsDialog(): Observable<any> {
    const dialogRef = this.dialog.open(FilterOptionsDialogComponent);

    return dialogRef.afterClosed();
  }

  openCreateDay(data: any) {
    const dialogRef = this.dialog.open(CreateDayComponent, {
      data: data
    });

    return dialogRef.afterClosed();
  }

  openShowDayDetails(details: string) {
    const dialogRef = this.dialog.open(ShowDayDetailsComponent, {
      data: details
    });

    return dialogRef.afterClosed();
  }

  /**
   * @function Open dialog to add admin
   */
  openAddAdminFormDialog(): void {
    this.dialog.open(AddAdminComponent, {
      panelClass: "custom-dialog-add-admin"
    });
  }

  openAddBusinessmanFormDialog(): void {
    this.dialog.open(RegisterBusinessManComponent, {
      panelClass: "custom-dialog-add-businessman"
    });
  }

  /**
   * open
   */
  openForgotPasswordDialog(): void {
    this.dialog.open(ForgotPasswordComponent, {});
  }

  open(component: any, options?: MatDialogConfig) {
    const dialogRef = this.dialog.open(component, options);

    return dialogRef.afterClosed()
  }
}
