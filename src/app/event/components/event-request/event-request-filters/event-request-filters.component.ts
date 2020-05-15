import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { MatDialogRef } from '@angular/material';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-event-request-filters',
  templateUrl: './event-request-filters.component.html',
  styleUrls: ['./event-request-filters.component.scss']
})
export class EventRequestFiltersComponent implements OnInit {

  eventRequestFiltersFG: FormGroup
  companies: any;
  private subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<EventRequestFiltersComponent>,
    public companyService: CompanyService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.eventRequestFiltersFG = new FormGroup({
      companies: new FormControl(null, Validators.required)
    })

    this.subscription = this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        this.companies = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  submit(){
    var company_id = this.eventRequestFiltersFG.controls['companies'].value
    console.log(company_id)
    this.dialogRef.close(company_id)
  } 

  closeDialog(){
    this.dialogRef.close()
  }

}
