import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  hide = true;
  icon = "done";
  //icon = "warning";

  constructor(
    private _fb: FormBuilder,
    public commonService: CommonService
  ) {
    this.editProfileForm = this._fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required]
    });
   }

  ngOnInit() {
    this.editProfileForm.valueChanges.subscribe(() => {
      if (this.editProfileForm.invalid == false) this.icon = "done";
      else this.icon = "warning";
    });
  }

  user = {
    name: "José Pablo Brenes Alfaro",
    email: "pablo@gmail.com",
    password: "pablo123"
  }

  saveChanges(){
    this.commonService.openSnackBar("Se han guardado los cambios correctamente","OK");
  }

}
