import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';


@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  constructor(
    public commonService: CommonService,
    public dialogService: DialogManagerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  /**
   * Default Users to show
   */
  users = [
    {
      id: 1,
      name: "José Pablo",
      lastname: "Brenes Alfaro",
      rol: "Empresario",
      habilitado: true,
      estado: true
    },
    {
      id: 2,
      name: "Josué",
      lastname: "Brenes Alfaro",
      rol: "Admin",
      habilitado: true,
      estado: true
    },
    {
      id: 3,
      name: "Dago",
      lastname: "Rojas Alfaro",
      rol: "Empresario",
      habilitado: true,
      estado: false
    }
  ]

  /**
   * Functions
   */
  /**
   * @function Set Available user (block or available)
   * @param state
   * @param userID
   */
  setAvailable(state: boolean, userID: number){
    //TODO: set to db state
    if(state)
      this.commonService.openSnackBar(`El usuario ${userID} ha sido habilitado`,"OK")
    else
      this.commonService.openSnackBar(`El usuario ${userID} ha sido desabilitado`,"OK")
    let idx = this.users.findIndex(user => user.id === userID);
    this.users[idx].habilitado = state;
  };

  /**
   * @function Set Acceptance business user
   * @param accept
   * @param userID
   */
  setAcceptance(accept: boolean, userID: number){
    //TODO: accept to db business user
    if(accept){
      this.commonService.openSnackBar(`El usuario ${userID} ha sido registrado correctamente`,"OK");
      let idx = this.users.findIndex(user => user.id === userID);
      this.users[idx].estado = accept;
    }
  };

  /**
   * @funtion Open dialog to add new admin
   */
  openDialogToAddAdmin(){
    this.dialogService.openAddAdminFormDialog();
  }


}
