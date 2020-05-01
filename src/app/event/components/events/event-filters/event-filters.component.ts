import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit {

  eventFiltersFG: FormGroup
  categories: any;
  private subscription: Subscription;
  
  constructor(
    public dialogRef: MatDialogRef<EventFiltersComponent>,
    public categoryService: CategoryService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.eventFiltersFG = new FormGroup({
      categories: new FormControl(null, Validators.required)
    })

    this.subscription = this.categoryService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categories = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }


  onNoClick(){
    this.dialogRef.close()
  }

  submit(){
    var category_id = this.eventFiltersFG.controls['categories'].value
    this.dialogRef.close(category_id)
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
