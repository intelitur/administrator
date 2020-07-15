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
  categoryImages = [];
  imageIndex = 0;

  categoryFG: FormGroup;
  loading = false;
  
  url="https://intelitur.sytes.net/files/images/"

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

  onSlide(event){
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  ngOnInit() {
    let category_name = this.category.name
    this.categoryFG.controls['name'].setValue(category_name)
    this.categoryImages = this.category.url
    console.log(this.category)
    
  }

  setData(){
    this.categoryFG.controls['name'].setValue(this.category.name)
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
            `La categoría ${this.category.name} ha sido cambiada`,
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
      url: this.category.url
    }
    return !(JSON.stringify(oldCategory) === JSON.stringify(this.categoryFG.value))
  }

  async uploadFile(files: FileList){
    this.loading = true;
    this.categoryFG.disable()
    let images = [];
    for(let i=0; i<files.length; i++){
      await this.commonService.uploadFile(files[i]).then((data: any) => {
          images.push(data.filename)
        }
      )
    }
    this.categoryImages.length != 0? images = images.concat(this.categoryImages): null;
    this.updateImages(images);
  }

  deleteImage(){
    this.loading = true;
    this.categoryFG.disable()
    this.categoryImages.splice(this.imageIndex, 1);
    this.updateImages(this.categoryImages)
  }

  updateImages(images) {

    let category: Category = {
      url: images,
      name: this.category.name,
      category_id: this.category.category_id,
      type: this.category.type,
      is_active: this.category.is_active
    }
    
    this.categoryService.modifyCategory(category).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.categoryFG.enable()
          this.category = category;
          this.categoryImages = images
          this.commonService.openSnackBar(
            `La categoría ${this.category.name} ha sido cambiada`,
            "OK"
          )
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar: ${data.error}`,
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
}
