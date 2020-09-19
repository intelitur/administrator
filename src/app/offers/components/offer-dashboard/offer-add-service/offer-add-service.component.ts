import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { ServiceService } from "src/app/services/services/service.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { GroupType } from "src/app/itinerary/models/GroupType";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { Category } from "src/app/services/models/Category";
import { Service } from "src/app/services/models/Service";
import { ImageService } from "src/app/itinerary/services/image.service";
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { OfferService } from 'src/app/offers/services/offer.service';

@Component({
  selector: "app-offer-add-service",
  templateUrl: "./offer-add-service.component.html",
  styleUrls: ["./offer-add-service.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferAddServiceComponent implements OnInit, OnDestroy {
  serviceFG: FormGroup;
  filteredServices: any = [];
  listServices: any = [];
  private subscription2: Subscription;
  private subscription3: Subscription;
  allServices: Array<any> = [];

  categories: Array<Category>;
  linkedCategories: Array<Category> = [];
  images: Array<File> = [];
  data = {
    local: true,
    images: []
  };
  groupTypes: Array<GroupType>;
  private subscription: Subscription;
  savedIt: number;
  savedImagePaths: Array<string> = [];
  constructor(
    public dialogRef: MatDialogRef<OfferAddServiceComponent>,
    private _fb: FormBuilder,
    private _service: ServiceService,
    private _common: CommonService,
    private _offer: OfferService,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.serviceFG = this._fb.group({
      services: ["", Validators.required]
    });
    this.getInformation();
  }
  async getInformation(){
    this.subscription2 = await this._offer
      .getServicesByOffer(this._offer.offer_id)
      .subscribe({
        next: (data: any) => {
          console.log("data1");
          console.log(data);
          this.listServices = data;
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    this.subscription3 = this._service
      .getServices()
      .subscribe({
        next: (data: any) => {
          console.log("data2");
          console.log(data);
          let band;
          for (let index = 0; index < data.length; index++) {
            band=false;
            const element = data[index];
            for (let index2 = 0; index2 < this.listServices.length; index2++) {
              const element2 = this.listServices[index2];
              if(element.service_id == element2.service_id){
                band = true;
              }
            }
            if(!band){
              this.filteredServices.push(element)
            }
            
          }
          console.log(this.filteredServices);
          
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
   //chipList 
  remove(service: string): void {
    let index = this.allServices.indexOf(service)
    if (index >= 0) {
      this.allServices.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    for(let i=0; i<this.allServices.length; i++){
      if(this.allServices[i].category_id === event.option.value.category_id){
        this.commonService.openSnackBar(
          "¡El servicio ya ha sido agregado!",
          "OK"
        );
        return
      }
    }
    this.allServices.push(event.option.value)
    this.serviceFG.controls['services'].setValue(null);
  }
  check(){
    if( this.allServices.length == 0){
      return true;
    }
    else{
      return false;
    }
  }

  onSubmit() {
    this.subscription = this._service
      .addServiceToOffer(this.allServices,this._offer.offer_id
    ).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Servicio creado", "Ok");
          this.onNoClick(201);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
  onNoClick(status:number){
    this.dialogRef.close({"status":status})
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
