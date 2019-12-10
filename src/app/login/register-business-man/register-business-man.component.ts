import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register-business-man',
  templateUrl: './register-business-man.component.html',
  styleUrls: ['./register-business-man.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterBusinessManComponent implements OnInit {
  addBusinessmanForm: FormGroup; // Form group to manage form
  hide = true; // Controller to show button
  icon = "warning";
  constructor(
    public dialogRef: MatDialogRef<RegisterBusinessManComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    public commonService: CommonService
  ) {
    // Variable to controller the form group
    this.addBusinessmanForm = this._fb.group({
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
    this.addBusinessmanForm.valueChanges.subscribe(() => {
      if (this.addBusinessmanForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  /**
   * @function add businessman
   */
  addBusinessman(): void{
    this.dialog.closeAll();
    this.commonService.openSnackBar(`Se ha registrado correctamente ${this.addBusinessmanForm.get("firstName").value}!`, "OK");
  }

}
