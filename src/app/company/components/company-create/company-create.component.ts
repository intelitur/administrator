import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { CommonService } from 'src/app/general-services/common.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  companyForm: FormGroup

  loading = false;

  constructor(
    private companyService: CompanyService,
    private commonService: CommonService,
    private router: Router,
    private dialog: MatDialog
  ) {
    
   }

  ngOnInit() {
    this.companyForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      legal_id: new FormControl(null, [Validators.required, Validators.pattern("^([1-9][0-9]{9})$")]),
      phone_number: new FormControl(null, Validators.pattern("^([0-9]{4}[ ][0-9]{4})$")),
      email: new FormControl(null, Validators.pattern('^(.{1,})[@](.{1,})[.](.{1,})$')),
      location: new FormControl(),
    }) 
  }

  createCompany(){
    this.loading = true;
    this.companyForm.disable();
    this.companyService.createCompany(this.companyForm.value).subscribe({
      next: (data: any) => {
        this.loading = false;
        if (data.status == 200) {
          console.log(data)
          this.commonService.openSnackBar(
            `La empresa ${this.companyForm.value.name} se ha creado`,
            "OK"
          );
          this.router.navigate(['/company', data.body.company_id])
          this.dialog.closeAll();
        } else {  
          this.commonService.openSnackBar(
            `Error al crear la empresa: ${data.error}`,
            "OK"
          );
          this.companyForm.enable()
        }
        
        
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
      }
    });
  }

}
