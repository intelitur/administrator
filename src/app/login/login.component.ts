import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogManagerService } from 'src/app/general-services/dialog-manager.service';
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
  constructor(
    private _fb: FormBuilder,
    public dialogService: DialogManagerService,
    public _auth: AuthService,
    private _router: Router
  ) {
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
  loginUser() {
    //this.sessionService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
    this._auth.login(new User(1, 1, {}))
    this._router.navigate(['/'])
  }
}
