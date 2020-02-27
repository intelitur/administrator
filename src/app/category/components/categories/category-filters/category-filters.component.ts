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
      name: new FormControl(null, Validators.required),
      type: new FormControl(null,Validators.required)
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  submit(){
    var value = {
      data: "A"
    }
    this.dialogRef.close(value)
    
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
