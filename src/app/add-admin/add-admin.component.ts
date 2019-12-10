import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  addAdminForm: FormGroup;
  hide = true;
  icon = "warning";
  constructor(
    public dialogRef: MatDialogRef<AddAdminComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    public commonService: CommonService
  ) {
    this.addAdminForm = this._fb.group({
      firstName: ["", Validators.required],
      secondName: [""],
      firstLastName: ["", Validators.required],
      secondLastName: ["", Validators.required],
      password: ["", Validators.required]
    });
   }

  ngOnInit() {
    this.addAdminForm.valueChanges.subscribe(() => {
      if (this.addAdminForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  addAdmin(){
    this.dialog.closeAll();
    this.commonService.openSnackBar("Se ha agregado correctamente","OK");
  }

}
