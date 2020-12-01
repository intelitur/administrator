import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { TransportServicesCategoriesService } from '../../services/transport-services-categories.service';

@Component({
  selector: 'app-create-categories-transport-services',
  templateUrl: './create-categories-transport-services.component.html',
  styleUrls: ['./create-categories-transport-services.component.scss']
})
export class CreateCategoriesTransportServicesComponent implements OnInit {

  categoryForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<CreateCategoriesTransportServicesComponent>,
    public categoryTransportService: TransportServicesCategoriesService,
    public commonService: CommonService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
    });
  }

  ngOnInit() {
  }

  createCategory(){
    this.categoryForm.disable()

    this.categoryTransportService.createTransportServicesCategory(this.categoryForm.value.name).subscribe({
      next: (data: any) => {
        if (data.status == 201) {
            this.commonService.openSnackBar(
              `El servicio de transporte ${this.categoryForm.value.name} se ha creado`,
              "OK"
            );
          this.closeDialog()
        } else {  
          this.commonService.openSnackBar(
            `Error al crear la categoría: ${data.error}`,
            "OK"
          );
          this.categoryForm.enable()
          }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.categoryForm.enable()
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
