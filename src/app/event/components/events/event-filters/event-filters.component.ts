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
  currentRate = 0;
  private subscription: Subscription;


  start_DateI = undefined;
  end_DateI = undefined;
  start_DateF = undefined;
  end_DateF = undefined;
  
  constructor(
    public dialogRef: MatDialogRef<EventFiltersComponent>,
    public categoryService: CategoryService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.eventFiltersFG = new FormGroup({
      categories: new FormControl(null, Validators.required),
      rate: new FormControl(null, Validators.pattern("^([0-5]{1}([.]{1}[0-9]){0,1})"))
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
    let info = {
      startDateI: this.start_DateI,
      endDateI: this.end_DateI,
      startDateF: this.start_DateF,
      endDateF: this.end_DateF,
      category_id: this.eventFiltersFG.controls['categories'].value,
      rate: this.currentRate
    }
    this.dialogRef.close(info)
  }

  closeDialog(){
    this.dialogRef.close()
  }

  dateFilterI = (date: Date): boolean => {
    return date >= this.start_DateI
  }

  dateFilterF = (date: Date): boolean => {
    return date >= this.start_DateF
  }

  disableDialog(): boolean {
    if(!this.eventFiltersFG.valid && this.start_DateI  == undefined && this.start_DateF == undefined && this.end_DateI == undefined && 
      this.end_DateF == undefined && this.currentRate == 0 || (this.start_DateI != undefined && this.end_DateI == undefined) || 
      (this.start_DateF != undefined && this.end_DateF == undefined) || this.start_DateI > this.end_DateI || this.start_DateF > this.end_DateF ){
        return true;
    }
    return false;
  }

  updateInput(rate){
    !Number(rate) ? this.currentRate = 0 : 
    rate <= 5 ?  this.currentRate = +parseFloat(rate).toFixed(1) : this.currentRate = 0;  
  }
}
