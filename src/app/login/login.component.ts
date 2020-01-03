import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { SessionService } from '../general-services/session.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Form group to manage form
  hide = true; // Controller to show button
  icon = "warning";
  public subscribeLogin: Subscription;
  constructor(
    private _fb: FormBuilder,
    public dialogService: DialogManagerService,
    public sessionService: SessionService) {
    // Variable to controller the form group
    this.loginForm = this._fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
    // Trigger to change icon
    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }
  /**
   * @funtion Open Dialog to register businessman
   */
  registerBusinessman(): void{
    this.dialogService.openAddBusinessmanFormDialog();
  }
  /**
   * @function Open Dialog to recovery password
   */
  forgotPassword(): void{
    this.dialogService.openForgotPasswordDialog();
  }
  /**
   * @funtion Login
   */
  loginUser(){
    this.sessionService.loadingLogin = true;
    this.sessionService.login(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe({
      next: (data : any) => {
        this.sessionService.loadingLogin = false;
        this.subscribeLogin.unsubscribe();
        localStorage.setItem(environment.localstorage_key,JSON.stringify(
          {name: data.data.name, user_id: data.data.user_id, role_id: data.data.role_id})
          );
        this.sessionService.actualUser = JSON.parse(localStorage.getItem(environment.localstorage_key));
        this.sessionService.commonService.openSnackBar(`Bienvenido ${this.sessionService.actualUser.name}`,"OK");
      }, error: (err : HttpErrorResponse)  => {
        this.subscribeLogin.unsubscribe();
        this.sessionService.commonService.openSnackBar(`Error en la autenticación`,"OK");this.sessionService.loadingLogin = false;}});
  }
}
