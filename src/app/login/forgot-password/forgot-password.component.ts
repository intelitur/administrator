import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup; // Form group to manage form
  changePasswordForm: FormGroup;
  icon = "warning";
  hide_pass = true; // Controller to show button
  hide_newpass = true;
  hide_code = true;
  loading: boolean = false;
  isSendEmail: boolean = false;
  public subscribeForgotPassword: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    public dialog: MatDialog,
    public sessionService: UserService,
    public commonService: CommonService,
    private _fb: FormBuilder
  ) {
    // Variable to controller the form group
    this.forgotPasswordForm = this._fb.group({
      email: ["",Validators.required]
    });

    this.changePasswordForm = this._fb.group({
      password: ["",Validators.required],
      confirmPassword: ["",Validators.required],
      code: ["",Validators.required]
    })
   }

   ngOnInit() {
    // Trigger to change icon
    this.forgotPasswordForm.valueChanges.subscribe(() => {
      if (this.forgotPasswordForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });

    this.changePasswordForm.valueChanges.subscribe(() => {
      if (this.forgotPasswordForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  /**
   * @funtion send email to recovery password
   */
  sendCodePassword(){
    this.loading = true;
    this.subscribeForgotPassword = this.sessionService.sendCodePassword(this.forgotPasswordForm.get("email").value).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.commonService.openSnackBar("Verifique su correo electrónico","OK");
        this.isSendEmail = true;
      }, error:(err: HttpErrorResponse) => {
        this.loading = false;
        this.commonService.openSnackBar(err.error.message,"OK");
      }
    });
  }
  
  /**
   * @function send new password
   */
  changePasswordByCode(){
    this.loading = true;
    if(this.changePasswordForm.get("password").value !== this.changePasswordForm.get("confirmPassword").value){
      this.loading = false;
      this.commonService.openSnackBar("Las contraseñas no coinciden!","OK"); return false;
    }else{
      this.subscribeForgotPassword = this.sessionService.changePasswordByCode(
        this.changePasswordForm.get("password").value,this.changePasswordForm.get("code").value).subscribe({
        next: (data: any) => {

          this.loading = false;
          this.commonService.openSnackBar("Las contraseña ha sido actualizada!","OK");
          this.dialog.closeAll();
        },error:(err: HttpErrorResponse) => {
        this.loading = false;
        this.commonService.openSnackBar(err.error.message,"OK");
      }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.subscribeForgotPassword)
      this.subscribeForgotPassword.unsubscribe();
  }
}
