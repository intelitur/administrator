import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CommonService } from "src/app/general-services/common.service";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { UserManagementService } from "src/app/services/user-management.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-users-management",
  templateUrl: "./users-management.component.html",
  styleUrls: ["./users-management.component.scss"]
})
export class UsersManagementComponent implements OnInit {
  filter: any = { user_id: "" };

  constructor(
    public commonService: CommonService,
    public dialogService: DialogManagerService,
    public dialog: MatDialog,
    public userManagmentService: UserManagementService
  ) {}

  ngOnInit() {
    this.userManagmentService.getAllUser();
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
    console.log(modifyInfo);
    this.userManagmentService
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
    this.userManagmentService
      .changeAvailableOrStateUser(userID, modifyInfo)
      .subscribe({
        next: (data: any) => {
          this.commonService.openSnackBar(
            `El id de usuario ${userID} ha sido registrado correctamente`,
            "OK"
          );
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
