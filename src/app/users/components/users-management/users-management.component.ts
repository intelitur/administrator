import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CommonService } from "src/app/general-services/common.service";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { UserService } from "src/app/users/services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-users-management",
  templateUrl: "./users-management.component.html",
  styleUrls: ["./users-management.component.scss"]
})
export class UsersManagementComponent implements OnInit {
  filter: any = { user_id: "" };
  private subscription: Subscription;
  constructor(
    public commonService: CommonService,
    public dialogService: DialogManagerService,
    public dialog: MatDialog,
    public userManagmentService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.userManagmentService.getAllUser()
    .subscribe({
      next: (data: any) => {
        this.userManagmentService.users = data.data;
        this.subscription.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
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
  setAvailable(state: boolean, userID: number, info: any) {
    let modifyInfo = info;
    modifyInfo.available = state;
    this.subscription = this.userManagmentService
      .changeAvailableOrStateUser(userID, modifyInfo)
      .subscribe({
        next: (data: any) => {
          if (state) {
            this.commonService.openSnackBar(
              `El usuario ${userID} ha sido habilitado`,
              "OK"
            );
          } else {
            this.commonService.openSnackBar(
              `El usuario ${userID} ha sido desabilitado`,
              "OK"
            );
          }
          this.subscription.unsubscribe();
          let idx = this.userManagmentService.users.findIndex(user => user.user_id === userID);
          this.userManagmentService.users[idx].info.available = state;
        },
        error: (err: HttpErrorResponse) =>
         this.commonService.openSnackBar(`Error: ${err}`, "OK")

      });
  }

  /**
   * @function Set Acceptance business user
   * @param accept
   * @param userID
   */
  setAcceptance(userID: number, info:any) {
    let modifyInfo = info;
    modifyInfo.state = true;
    this.subscription = this.userManagmentService
      .changeAvailableOrStateUser(userID, modifyInfo)
      .subscribe({
        next: (data: any) => {
          this.commonService.openSnackBar(
            `El id de usuario ${userID} ha sido registrado correctamente`,
            "OK"
          );
          this.subscription.unsubscribe();
          let idx = this.userManagmentService.users.findIndex(user => user.user_id === userID);
          this.userManagmentService.users[idx].info.state = true;
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  /**
   * @funtion Open dialog to add new admin
   */
  openDialogToAddAdmin() {
    this.dialogService.openAddAdminFormDialog();
  }


}
