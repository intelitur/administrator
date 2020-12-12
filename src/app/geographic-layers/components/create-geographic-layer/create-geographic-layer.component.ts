import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';
import { CommonService } from 'src/app/general-services/common.service';
import { GeographicLayersService } from '../../services/geographic-layers.service';

@Component({
  selector: "app-create-geographic-layer",
  templateUrl: "./create-geographic-layer.component.html",
  styleUrls: ["./create-geographic-layer.component.scss"],
})
export class CreateGeographicLayerComponent implements OnInit {
  layerFG: FormGroup;
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateGeographicLayerComponent>,
    public fb: FormBuilder,
    public geographicLayerService: GeographicLayersService,
    public commonService: CommonService,
    private router: Router
  ) {
    this.layerFG = this.fb.group({
      name: ["", Validators.required],
      detail: ["", Validators.required],
      textAtributes: this.fb.array(
        [this.fb.group({ textAtribute: ["", Validators.required] })],
        Validators.required
      ),
      intAtributes: this.fb.array(
        [this.fb.group({ intAtribute: ["", Validators.required] })],
        Validators.required
      ),
    });
  }

  ngOnInit() {}

  get txtAtributes() {
    return this.layerFG.get("textAtributes") as FormArray;
  }

  addTextAtribute() {
    this.txtAtributes.push(this.fb.group({ textAtribute: ["", Validators.required] }));
  }

  deleteTextAtribute(index) {
    this.txtAtributes.removeAt(index);
  }


  get integerAtributes() {
    return this.layerFG.get("intAtributes") as FormArray;
  }

  addIntAtribute() {
    this.integerAtributes.push(this.fb.group({ intAtribute: ["", Validators.required] }));
  }

  deleteIntAtribute(index) {
    this.integerAtributes.removeAt(index);
  }


  submit(){ //TODO: Preguntar sobre la lat y lng
    this.layerFG.disable();
    this.loading = true;

    let layer:any = {
      layer_name: this.layerFG.controls['name'].value,
      layer_detail: this.layerFG.controls['detail'].value
    }

    for (let i = 0; i < this.txtAtributes.value.length; i++) {
      const element = this.txtAtributes.value[i].textAtribute;
      layer[element] = {
        name: element,
        tipo: "string"
      }
    }

    for (let i = 0; i < this.integerAtributes.value.length; i++) {
      const element = this.integerAtributes.value[i].intAtribute;
      layer[element] = {
        name: element,
        tipo: "integer"
      }
    }
    
    this.addLayer(layer)
  }


  addLayer(layer: any){
    console.log(layer)
    this.geographicLayerService.createLayer(layer).subscribe({
      next: (data: any) =>{
        if(data.status == 201){
          console.log(data)
          this.commonService.openSnackBar(
            `La capa ${this.layerFG.value.name} se ha creado!`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate([`/geographic-layers/${data.body[0]}`])
        }else{
          this.commonService.openSnackBar(`Ha ocurrido un error al intentar crear la capa: ${data.error}`, "OK")
          this.layerFG.enable();
          this.loading = true;
        }
      }, error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.layerFG.enable();
        this.loading = true;
      }
    })
  }

  disableDialog(): boolean {
    if(!this.layerFG.valid){
      return true
    }
    return false;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
