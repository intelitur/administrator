import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-add-event-offers',
  templateUrl: './add-event-offers.component.html',
  styleUrls: ['./add-event-offers.component.scss']
})
export class AddEventOffersComponent implements OnInit {

  offers: any;
  offersFG: FormGroup;
  private subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<AddEventOffersComponent>,
    public offersService: CategoryService,
    public commonService: CommonService
  ) {
    this.offersFG = new FormGroup({
      offer: new FormControl(null, Validators.required),
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit() {
    this.subscription = this.offersService.getAllCategories().subscribe({
      next: (data: any) => {
        this.offers = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

}
