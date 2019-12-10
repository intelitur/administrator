import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogManagerService } from '../services/dialog-manager.service';

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
    public dialogService: DialogManagerService) {
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
}
