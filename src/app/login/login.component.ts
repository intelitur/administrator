import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../users/services/user.service';
import { AuthService } from '../general-services/auth.service';
import { User } from '../users/models/User.class';
import { Router } from '@angular/router';

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
    public sessionService: UserService,
    public _auth: AuthService,
    private _router: Router) {
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
  registerBusinessman(): void {
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
    this.subscribeLogin = this.sessionService.login(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe({
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
 /* loginUser() {
    //this.sessionService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
    this._auth.login(new User(1, 1, {}))
    this._router.navigate(['/'])
  }*/
  }
}
