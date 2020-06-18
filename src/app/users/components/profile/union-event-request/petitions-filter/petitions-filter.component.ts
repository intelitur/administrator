import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { User } from 'src/app/users/models/User.class';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-petitions-filter',
  templateUrl: './petitions-filter.component.html',
  styleUrls: ['./petitions-filter.component.scss']
})
export class PetitionsFilterComponent implements OnInit {

  user: User
  petitionsFiltersFG: FormGroup
  companies: any;
  private subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<PetitionsFilterComponent>,
    public commonService: CommonService,
    public userCompanySerice: CompanyUsersService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.petitionsFiltersFG = new FormGroup({
      companies: new FormControl(null, Validators.required)
    })

    this.user = this.userService.actualUser

    this.subscription = this.userCompanySerice.getUserCompanies(this.user.user_id).subscribe({
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
    var company_id = this.petitionsFiltersFG.controls['companies'].value
    this.dialogRef.close(company_id)
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
