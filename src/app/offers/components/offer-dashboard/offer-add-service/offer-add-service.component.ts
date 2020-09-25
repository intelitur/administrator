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
  status:number;
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
    this.status =200;
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
              if(this.filteredServices.length ==0){
                this._common.openSnackBar("No hay servicios por agregar", "Ok");
                this.onNoClick();
              }
              console.log(this.filteredServices);
              
            },
            error: (err: HttpErrorResponse) => this._common.handleError(err)
          });
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    
  }
  onSubmit() {
    this.subscription = this._service
      .addServiceToOffer(this.serviceFG.controls['services'].value,this._offer.offer_id
    ).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Servicio creado", "Ok");
          this.serviceFG.controls['services'].setValue(null);
          this.status =201;
          this.getInformation();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
  onNoClick(){
    this.dialogRef.close({"status":this.status})
  }
  ngOnDestroy() {
    
  }
}
