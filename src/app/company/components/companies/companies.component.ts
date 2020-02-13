import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { CompanyService } from '../../services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Company } from '../../models/Company';
import { CompanyCreateComponent } from '../company-create/company-create.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  filter: any = {
    name: ""
  };
  private subscription: Subscription;
  constructor(
    public commonService: CommonService,
    public dialogService: DialogManagerService,
    public companyService: CompanyService
  ) { }

  ngOnInit() {

    this.subscription = this.companyService.getCompanies()
      .subscribe({
        next: (data: any) => {
          console.log(data)
          this.companyService.companies = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  /**
   * Functions
   */
  /**
  * @function Set Available user (block or available)
  * @param state
  * @param userID
  */
  changeState(company: Company, {source}: any) {
    this.companyService
      .chageCompanyState(company)
      .subscribe({
        next: (data: any) => {
          if (data.status == 204) {
            company.state = !company.state;
            source.checked = company.state
            if (company.state)
              this.commonService.openSnackBar(
                `La empresa ${company.name} ha sido activada`,
                "OK"
              );
            else
              this.commonService.openSnackBar(
                `La empresa ${company.name} ha sido desactivada`,
                "OK"
              );


          } else {
            this.commonService.openSnackBar(
              `Error al cambiar el estado: ${data.error}`,
              "OK"
            );
          }
          
        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
          source.checked = company.state
        }
      });
  }

  openCreateCompanyDialog(){
    this.dialogService.open(CompanyCreateComponent, {width: "60%", minWidth: "280px"});
  }


}

