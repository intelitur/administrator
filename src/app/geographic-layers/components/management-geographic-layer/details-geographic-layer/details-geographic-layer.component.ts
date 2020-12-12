import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { GeographicLayersService } from "src/app/geographic-layers/services/geographic-layers.service";

@Component({
  selector: "app-details-geographic-layer",
  templateUrl: "./details-geographic-layer.component.html",
  styleUrls: ["./details-geographic-layer.component.scss"],
})
export class DetailsGeographicLayerComponent implements OnInit {
  @Input() myLayer: any;
  layerFG: FormGroup;
  loading: boolean = false;
  subscription: Subscription;

  constructor(
    public fb: FormBuilder,
    public geographicLayerService: GeographicLayersService,
    public commonService: CommonService
  ) {
    this.layerFG = this.fb.group({
      name: ["", Validators.required],
      detail: ["", Validators.required],
      textAtributes: this.fb.array([this.fb.group({})], Validators.required),
      intAtributes: this.fb.array([this.fb.group({})], Validators.required),
    });
  }

  ngOnInit() {}

  get txtAtributes() {
    return this.layerFG.get("textAtributes") as FormArray;
  }

  addTextAtribute() {
    this.txtAtributes.push(
      this.fb.group({ textAtribute: ["", Validators.required] })
    );
  }

  deleteTextAtribute(index) {
    this.txtAtributes.removeAt(index);
  }

  get integerAtributes() {
    return this.layerFG.get("intAtributes") as FormArray;
  }

  addIntAtribute() {
    this.integerAtributes.push(
      this.fb.group({ intAtribute: ["", Validators.required] })
    );
  }

  deleteIntAtribute(index) {
    this.integerAtributes.removeAt(index);
  }

  setData() {
    this.layerFG.controls["name"].setValue(this.myLayer.layer_name);
    this.layerFG.controls["detail"].setValue(this.myLayer.detail);
    for (let i = 0; i < this.myLayer.length; i++) {
      const element = this.myLayer[i];
    }
  }

  disableDialog(): boolean {
    if (!this.layerFG.valid) {
      return true;
    }
    return false;
  }
}
