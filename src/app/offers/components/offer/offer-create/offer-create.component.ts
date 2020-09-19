import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Offer } from "src/app/offers/models/Offer";
import { Subscription } from "rxjs";
import { OfferService } from "src/app/offers/services/offer.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { CompanyService } from 'src/app/company/services/company.service';
import { ServiceService } from 'src/app/services/services/service.service';

@Component({
  selector: "app-offer-form-dialog",
  templateUrl: "./offer-create.component.html",
  styleUrls: ["./offer-create.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferCreateComponent implements OnInit, OnDestroy {
  offerFG: FormGroup;
  private subscription: Subscription;
  allServices: Array<any> = [];
  filteredServices: any = [];
  companies: any = [];
  private subscription2: Subscription;
  private subscription3: Subscription;
  constructor(
    public commonService: CommonService,
    public dialogRef: MatDialogRef<OfferCreateComponent>,
    private _fb: FormBuilder,
    private _offer: OfferService,
    private _common: CommonService,
    public companyService: CompanyService,
    private _service : ServiceService
  ) {}

  ngOnInit() {
    this.offerFG = this._fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      companies: ["", Validators.required],
      services: ["", Validators.required]
    });
    this.subscription2 = this._service
      .getServices()
      .subscribe({
        next: (data: any) => {
          console.log(data);
          
          this.filteredServices = data;
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });

    this.subscription3 = this.companyService.getCompanies()
    .subscribe({
      next: (data: any) => {
        this.companies = data;
        this.subscription2.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }


  onSubmit() {
    let fv = this.offerFG.value;
    this.subscription = this._offer
      .addOffer(
        new Offer(
            this.offerFG.get('name').value,
            this.offerFG.get('description').value
        )
      ).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Oferta creada con éxito", "Ok");
          this.onNoClick();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }
  check(){
    let tipo  = new RegExp("^[A-Za-z0-9]");
    var test = tipo.test(this.offerFG.get('name').value);
    if(this.offerFG.get('description').value == "" || this.allServices.length == 0 || this.offerFG.get('companies').value =="" || !test){
      return true;
    }
    else{
      return false;
    }
  }
  onNoClick(){
    console.log(this.offerFG.get('companies').value);
    
    this.dialogRef.close()
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
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
    this.offerFG.controls['services'].setValue(null);
  }
   //chipList 
   remove(service: string): void {
    let index = this.allServices.indexOf(service)
    if (index >= 0) {
      this.allServices.splice(index, 1);
    }
  }
  linkedCategories: Array<any> = [];
    /**
   * @function link category
   */
  linkCategory(c: any) {
    if (!this.linkedCategories.includes(c)) this.linkedCategories.unshift(c);
  }
}
