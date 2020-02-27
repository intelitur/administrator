import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../../models/Category';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  loading = false;
  categoryFG: FormGroup
  types = [
    {id: 1, name:"Evento"},
    {id: 2, name:"Itinerario"},
    {id: 3, name:"Servicio"}
  ]
  fileToUpload: File = null;

  constructor(
    private categoryService: CategoryService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      type: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    let category: Category = {
      name: this.categoryFG.value.name,
      type: this.categoryFG.value.type,
      url: ""
    }
    this.createCategory(category)
  }

  createCategory(category: Category){
    this.loading = true;
    this.categoryFG.disable();
    this.categoryService.createCategory(category).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          console.log(data)
          this.commonService.openSnackBar(
            `La categoría ${this.categoryFG.value.name} se ha creado`,
            "OK"
          );
          console.log(data)
          this.router.navigate([`/category/all`])
          this.dialog.closeAll();
        } else {  
          this.commonService.openSnackBar(
            `Error al crear la empresa: ${data.error}`,
            "OK"
          );
          this.categoryFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.categoryFG.enable()
      }
    });
  }


  getFile(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(files.item(0))
  }

}
