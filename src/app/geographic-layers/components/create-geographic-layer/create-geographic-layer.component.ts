import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-create-geographic-layer",
  templateUrl: "./create-geographic-layer.component.html",
  styleUrls: ["./create-geographic-layer.component.scss"],
})
export class CreateGeographicLayerComponent implements OnInit {
  layerFG: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateGeographicLayerComponent>,
    public fb: FormBuilder
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
