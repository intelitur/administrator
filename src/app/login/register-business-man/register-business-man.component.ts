import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/general-services/common.service';
import { BusinessmanService } from 'src/app/services/bussinesman.service';
import { BusinessMan } from 'src/app/models/Businessman.class';
import { HttpErrorResponse } from '@angular/common/http';


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
  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<RegisterBusinessManComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    public businessService: BusinessmanService,
    public commonService: CommonService
  ) {
    // Variable to controller the form group
    this.addBusinessmanForm = this._fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      businessName: ["", Validators.required],
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
    this.loading = true; // Charge loading
    let info: BusinessMan = {
      name: this.addBusinessmanForm.get('name').value,
      lastName: this.addBusinessmanForm.get('lastName').value,
      businessName: this.addBusinessmanForm.get('businessName').value,
      password: this.addBusinessmanForm.get('password').value,
      available: false,
      state: false
    }
    this.businessService.registerBusinessman(info).subscribe({
      next: (data : any) => {
        this.loading = false;
        this.commonService.openSnackBar(`Se ha registrado ${info.name}, espere la validación de su cuenta`, "OK");
        this.dialog.closeAll();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });;
    this.dialog.closeAll();
  }

}
