import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Category } from "src/app/itinerary/models/Category";
import { GroupType } from "src/app/itinerary/models/GroupType";
import { HttpErrorResponse } from "@angular/common/http";
import { Filter } from "src/app/itinerary/models/Filter.interface";
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: "app-filter-options-dialog",
  templateUrl: "./filter-options-dialog.component.html",
  styleUrls: ["./filter-options-dialog.component.scss"]
})
export class FilterOptionsDialogComponent implements OnInit, OnDestroy {
  filters: Filter = { role: 0 };
  categorySubs: Subscription;
  groupTypeSubs: Subscription;
  categories: Array<Category>;
  groupTypes: Array<GroupType>;
  constructor(
    public dialogRef: MatDialogRef<FilterOptionsDialogComponent>,
    private _itineray: ItineraryService,
    private _common: CommonService,
    private _session: UserService
  ) {}

  ngOnInit() {
    this.filters.role = this._session.actualUser.role_id;
    this.filters.user_id = this._session.actualUser.user_id;
    this.categorySubs = this._itineray.getCategories().subscribe({
      next: (response: ResponseInterface) => (this.categories = response.data),
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });

    this.groupTypeSubs = this._itineray.getGroupTypes().subscribe({
      next: (response: ResponseInterface) => (this.groupTypes = response.data),
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }
  submit(): void {
    this.dialogRef.close(this.filters);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.categorySubs) this.categorySubs.unsubscribe();
    if (this.groupTypeSubs) this.groupTypeSubs.unsubscribe();
  }
}
