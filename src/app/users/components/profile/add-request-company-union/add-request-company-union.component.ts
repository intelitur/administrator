import { Component, OnInit, Inject } from '@angular/core';
import { CompanyService } from 'src/app/company/services/company.service';
import { Company } from 'src/app/company/models/Company';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from 'src/app/users/models/User.class';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-request-company-union',
  templateUrl: './add-request-company-union.component.html',
  styleUrls: ['./add-request-company-union.component.scss']
})
export class AddRequestCompanyUnionComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private companyUsersService: CompanyUsersService,
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private dialog : MatDialogRef<AddRequestCompanyUnionComponent>
  ) { }

  loading = false

  companies: Company[]

  filteredCompanies: Observable<Company[]>

  companyControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,} [|] [A-z0-9 ]{1,}')])

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data
    })


    this.filteredCompanies = this.companyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Company[] {
    if (this.companies) {
      const filterValue = value.toLowerCase()

      return this.companies.filter(option => option.name.toLowerCase().includes(filterValue))
    }
  }

  requestUnion() {
    this.loading = true
    let company_id = Number(this.companyControl.value.split(" | ")[0])
    this.companyUsersService.requesUnion(this.user.user_id, company_id).subscribe({
      next: (response) => {
        if (response.status == 204) {
          this.commonService.snackBar.open("La solicitud de unión ha sido enviada", "Ok")
          this.loading = false
          this.dialog.close()
        }
      },
      error: (err: HttpErrorResponse) => {
        if(err.status == 400)
          this.commonService.snackBar.open(err.error, "Ok")
        else
          this.commonService.snackBar.open("Ha ocurrido un error con la base de datos", "Ok")
        this.loading = false
      }
    })
  }

}
