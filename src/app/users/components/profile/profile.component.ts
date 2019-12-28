import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from 'rxjs';
import { UserProfileService } from '../../services/user-profile.service';
import { User } from '../../models/User.class';
import { SessionService } from 'src/app/general-services/session.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
    public userProfileService: UserProfileService,
    public sesionService: SessionService
  ) {   }



  ngOnInit() {

    this.subscriptionUserProfile = this.userProfileService.getUser(this.sesionService.actualUser.user_id).subscribe({
      next: (data : any) => {
        this.user = data.data[0];
        this.subscriptionUserProfile.unsubscribe();
        this.loadUser();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }

  loadUser(){
    this.editProfileForm = this._fb.group({
      name: [this.user.info.name, Validators.required],
      lastName: [this.user.info.lastName, Validators.required],
      email: [this.user.info.email, Validators.required],
      password: ['']
    });
    this.editProfileForm.valueChanges.subscribe(() => {
      if (this.editProfileForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  saveChanges(){
    console.log('object');
    let passChanged = false;
    if(!this.editProfileForm.get('password').value){
      this.user.info.password = this.editProfileForm.get('password').value;
      passChanged = true;
    }
    this.user.info.name = this.editProfileForm.get('name').value;
    this.user.info.lastName = this.editProfileForm.get('lastName').value;
    this.user.info.email = this.editProfileForm.get('email').value;
    this.subscriptionUserProfile = this.userProfileService.updateUser(this.user.user_id, this.user.info, passChanged).subscribe({
      next: (data : any) => {
        this.commonService.openSnackBar(`Se ha actualizado el usuario  ${this.user.info.name}`, "OK");
        this.subscriptionUserProfile.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }

}
