import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

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
  constructor(
    public dialogRef: MatDialogRef<AddAdminComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    public commonService: CommonService
  ) {
    // Variable to controller the form group
    this.addAdminForm = this._fb.group({
      firstName: ["", Validators.required],
      secondName: [""],
      firstLastName: ["", Validators.required],
      secondLastName: ["", Validators.required],
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
    this.dialog.closeAll();
    this.commonService.openSnackBar("Se ha agregado correctamente","OK");
  }

}
