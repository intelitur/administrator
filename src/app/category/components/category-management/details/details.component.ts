import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/category/models/Category';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() category: Category

  categoryFG: FormGroup;
  loading = false;
  
  types = [
    {id:1, name:"Evento"},
    {id:2, name:"Itinerario"},
    {id:3, name:"Servicio"}
  ]
  fileToUpload: File = null;

  constructor(
    private categoryService: CategoryService,
    private commonService: CommonService
  ) {
    this.categoryFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")])
    })
   }

  ngOnInit() {
    let category_name = this.category.name
    this.categoryFG.controls['name'].setValue(category_name)
  }


  changeState({source}: any){
    var id = this.category.category_id
    
    this.categoryService
      .changeStateCategory(id)
      .subscribe({
        next: (data: any) => {
          if (data.status == 204) {
            this.category.is_active = !this.category.is_active;
            source.checked = this.category.is_active
            if (this.category.is_active)
              this.commonService.openSnackBar(
                `La categoría ${this.category.name} ha sido activada`,
                "OK"
              );
            else
              this.commonService.openSnackBar(
                `La categoría ${this.category.name} ha sido desactivada`,
                "OK"
              );
          } else {
            this.commonService.openSnackBar(
              `Error al cambiar el estado: ${data.error}`,
              "OK"
            );
          }
        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
          source.checked = this.category.is_active
        }
      });
  }

  modifyCategory(){
    this.loading = true;
    this.categoryFG.disable()
    let category = {
      ...this.category,
      ...this.categoryFG.value
    }

    let values = { 
      url: category.url,
      name: category.name,
      category_id: category.category_id
    }
    this.categoryService.modifyCategory(values).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.categoryFG.enable()
          this.category = category;
          this.commonService.openSnackBar(
            `La empresa ${this.category.name} ha sido cambiada`,
            "OK")
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }

      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.categoryFG.enable()
      }

    })

  }


  isChanged(): boolean {

    let oldCategory = {
      name: this.category.name,
      type: this.category.type,
      url: ""
    }
    return !(JSON.stringify(oldCategory) === JSON.stringify(this.categoryFG.value))
  }
}
