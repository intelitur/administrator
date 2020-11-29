import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { AuthService } from 'src/app/general-services/auth.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TransportService } from '../../models/transport-service';
import { TransportServicesCategoriesService } from '../../services/transport-services-categories.service';
import { TransportServicesService } from '../../services/transport-services.service';

@Component({
  selector: 'app-create-transport-services',
  templateUrl: './create-transport-services.component.html',
  styleUrls: ['./create-transport-services.component.scss']
})
export class CreateTransportServicesComponent implements OnInit {

  tsForm: FormGroup
  categories: any;
  loading: boolean = false;
  subscription: Subscription;

  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<CreateTransportServicesComponent>,
    public transportService: TransportServicesService,
    public commonService: CommonService,
    private router: Router,
    private categoryService: TransportServicesCategoriesService
  ) { }

  ngOnInit() {
    this.tsForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^(.{1,})[@](.{1,})[.](.{1,})$')]),
      phone_number: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{4}[-]{0,1}[ ]{0,1}[0-9]{4}")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      categories: new FormControl(null, Validators.required),
    });

    this.subscription = this.categoryService.getTransportServicesCategories().subscribe({
      next: (data: any) => {
        this.categories = data
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err.message}`,"OK")
    })

  }

  createTransportService(){
    this.loading = true;
    this.tsForm.disable();
    let transportService: TransportService = {
      name: this.tsForm.controls["name"].value,
      email: this.tsForm.controls["email"].value,
      categories_id: this.tsForm.controls["categories"].value,
      tel: this.tsForm.controls["phone_number"].value,
      hire_dir: this.tsForm.controls["address"].value,
      user_id: this.authService.getUser().user_id
    }
    this.transportService.createTransportService(transportService).subscribe({
      next: (data: any) => {
        this.loading = false;
        if (data.status == 201) {
          if(this.authService.getUser().role_id == 1){
            this.commonService.openSnackBar(
              `El servicio de transporte ${this.tsForm.value.name} se ha creado`,
              "OK"
            );
            this.router.navigate(['/transport-services', data.body[0]])
          }else{
            this.commonService.openSnackBar(
              `La solicitud de creación del servicio de transporte ${this.tsForm.value.name} se ha enviado`,
              "OK"
            );
          }
          this.closeDialog()
        } else {  
          this.commonService.openSnackBar(
            `Error al crear el servicio de transporte: ${data.error}`,
            "OK"
          );
          this.tsForm.enable()
          }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.tsForm.enable()
      }
    });
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
