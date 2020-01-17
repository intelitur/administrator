import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { UserService } from "src/app/users/services/user.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-profile-info",
  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.scss"]
})
export class ProfileInfoComponent implements OnInit {
  user: any;
  editProfileForm: FormGroup;
  hide = true;
  icon = "done";
  //icon = "warning";
  private subscription: Subscription;
  loading: boolean = false;
  private subscriptionUserProfile: Subscription;
  public userLoading: boolean = false;
  public addedUserLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    public commonService: CommonService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.subscriptionUserProfile = this.userService
      .getUser(this.userService.actualUser.user_id)
      .subscribe({
        next: (data: any) => {
          this.user = data.data[0];
          this.subscriptionUserProfile.unsubscribe();
          this.loadUser();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }
  /**
   * @function load user
   */
  loadUser() {
    this.editProfileForm = this._fb.group({
      name: [this.user.info.name, Validators.required],
      lastName: [this.user.info.lastName, Validators.required],
      email: [this.user.info.email, Validators.email],
      password: [""]
    });
    this.editProfileForm.valueChanges.subscribe(() => {
      if (this.editProfileForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }
  /**
   * @function Save changes by user
   */
  saveChanges() {
    let passChanged = false;
    if (this.editProfileForm.get("password").value != "") {
      this.user.info.password = this.editProfileForm.get("password").value;
      passChanged = true;
    }
    this.user.info.name = this.editProfileForm.get("name").value;
    this.user.info.lastName = this.editProfileForm.get("lastName").value;
    this.user.info.email = this.editProfileForm.get("email").value;
    this.subscriptionUserProfile = this.userService
      .updateUser(this.user.user_id, this.user.info, passChanged)
      .subscribe({
        next: (data: any) => {
          this.commonService.openSnackBar(
            `Se ha actualizado el usuario  ${this.user.info.name}`,
            "OK"
          );
          this.subscriptionUserProfile.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
  }

  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
    if(this.subscriptionUserProfile)
      this.subscriptionUserProfile.unsubscribe();
  }
}
