import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-category-filters',
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.scss']
})
export class CategoryFiltersComponent implements OnInit {

  types = [
    {id: 1, name:"Evento"},
    {id: 2, name:"Itinerario"},
    {id: 3, name:"Servicio"}
  ]
  categoryFiltersFG: FormGroup

  constructor(
    public dialogRef: MatDialogRef<CategoryFiltersComponent>
  ) { }

  ngOnInit() {
    this.categoryFiltersFG = new FormGroup({
      type: new FormControl(null, Validators.required)
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  submit(){
    var type_id = this.categoryFiltersFG.controls['type'].value
    this.dialogRef.close(type_id)
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
