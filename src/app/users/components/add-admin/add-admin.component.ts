import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../../general-services/common.service';
import { AdministratorMan } from 'src/app/users/models/AdministratorMan.class';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddAdminComponent implements OnInit {
  addAdminForm: FormGroup; // Form group to manage form
  hide = true; // Controller to show button
  icon = "warning";
  private subscription: Subscription;
  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AddAdminComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    public sessionService: UserService,
    public commonService: CommonService
  ) {
    // Variable to controller the form group
    this.addAdminForm = this._fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
   }

  ngOnInit() {
    // Trigger to change icon
    this.addAdminForm.valueChanges.subscribe(() => {
      if (this.addAdminForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  /**
   * @function add Admin
   */
  addAdmin(){
    this.loading = true; // Charge loading
    let info: AdministratorMan = {
      name: this.addAdminForm.get('name').value,
      lastName: this.addAdminForm.get('lastName').value,
      email: this.addAdminForm.get('email').value,
      password: this.addAdminForm.get('password').value,
      available: true,
      state: true
    }
    this.subscription = this.sessionService.saveUserAdmi(info,1).subscribe({
      next: (data : any) => {
        this.loading = false;
        this.commonService.openSnackBar(`Se ha registrado el usuario administrador ${info.name}`, "OK");
        this.dialog.closeAll();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
