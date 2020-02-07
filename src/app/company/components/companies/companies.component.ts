import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { MatDialog } from '@angular/material';
import { CompanyService } from '../../services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Company } from '../../models/Company';

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
    public dialog: MatDialog,
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

  // /**
  //  * @function Set Acceptance business user
  //  * @param accept
  //  * @param userID
  //  */
  // setAcceptance(userID: number, info:any) {
  //   let modifyInfo = info;
  //   modifyInfo.state = true;
  //   this.subscription = this.userManagmentService
  //     .changeAvailableOrStateUser(userID, modifyInfo)
  //     .subscribe({
  //       next: (data: any) => {
  //         this.commonService.openSnackBar(
  //           `El id de usuario ${userID} ha sido registrado correctamente`,
  //           "OK"
  //         );
  //         this.subscription.unsubscribe();
  //         let idx = this.userManagmentService.users.findIndex(user => user.user_id === userID);
  //         this.userManagmentService.users[idx].info.state = true;
  //       },
  //       error: (err: HttpErrorResponse) =>
  //         this.commonService.openSnackBar(`Error: ${err}`, "OK")
  //     });
  // }

  // /**
  //  * @funtion Open dialog to add new admin
  //  */
  // openDialogToAddAdmin() {
  //   this.dialogService.openAddAdminFormDialog();
  // }


}

