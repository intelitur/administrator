import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TouristRoute } from 'src/app/tourist-routes/models/tourist-route';
import { TouristRoutesService } from 'src/app/tourist-routes/services/tourist-routes.service';

@Component({
  selector: 'app-tourist-routes-details',
  templateUrl: './tourist-routes-details.component.html',
  styleUrls: ['./tourist-routes-details.component.scss']
})
export class TouristRoutesDetailsComponent implements OnInit {

  @Input() myRoute: TouristRoute;
  loading: boolean = false;
  associateOffers: Array<any> = []; 
  oldaAsociateOffers: Array<any> = []; 
  trFG: FormGroup;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    public touristRoutesService: TouristRoutesService, 
    public offerService: CategoryService,//Cambiar
    public commonService: CommonService
  ) {
    this.trFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      offer: new FormControl(null)
    })
   }

  ngOnInit() {
     // this.subscription = this.offerService.getOffers()
    // .subscribe({
    //   next: (data: any) => {
    //     this.offerService.offers = data;
    //     this.subscription.unsubscribe();
    //   }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    // })

    this.setData();
  }

  setData(){
    this.trFG.controls['name'].setValue(this.myRoute.name)

    this.subscription2 = this.touristRoutesService.getTouristRouteOffers(this.myRoute.tourist_route_id).subscribe({
      next: (data: any) => {
        this.associateOffers = [];
        this.oldaAsociateOffers = [];
        data.forEach(val => this.associateOffers.push(val));
        this.associateOffers.forEach(val => this.oldaAsociateOffers.push(val.category_id));
        this.subscription2.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  modifyRoute(){
    this.loading = true;
    let tr: TouristRoute = {
      tourist_route_id: this.myRoute.tourist_route_id,
      name: this.trFG.controls['name'].value,
      is_active: this.myRoute.is_active,
      state: this.myRoute.state
    }

    this.touristRoutesService.modifyTouristRute(tr).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          this.trFG.enable()
          this.myRoute = tr;

          let offersIds = this.getOfferIds();
          await this.asociateoffers(this.myRoute.tourist_route_id, offersIds);

          this.commonService.openSnackBar(`La ruta turística ${this.myRoute.name} ha sido cambiada`,"OK")
          this.loading = false;
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
        this.trFG.enable()
      }
    })

  }

  changeEventState(touristRoute: TouristRoute, {source}: any){
  
    this.touristRoutesService.changeTouristRouteState(touristRoute.tourist_route_id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          touristRoute.is_active = !touristRoute.is_active;
          source.checked = touristRoute.is_active
          if (touristRoute.is_active)
            this.commonService.openSnackBar(
              `La ruta turística ${touristRoute.name} ha sido activada`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `La ruta turística ${touristRoute.name} ha sido desactivada`,
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
        source.checked = touristRoute.is_active
      }
    });
  }

  addOffer(){
    let offer = this.trFG.controls['offer'].value
    let index = this.associateOffers.indexOf(offer);
    if(index < 0){
      this.associateOffers.push(offer);
    }else {
      this.commonService.openSnackBar(
        "¡La oferta ya ha sido agregada!",
        "OK"
      );
    }
  }

  removeOffer(offer){
    let index = this.associateOffers.indexOf(offer);
    if(index >= 0){
      this.associateOffers.splice(index, 1);
    }
  }

  getOfferIds():Array<Number> {
    let ids: Array<Number> = [];
    this.associateOffers.forEach(elem => ids.push(elem.offer_id));
    return ids;
  }

  async asociateoffers(tr_id:Number, offerIds: Array<Number>){
    for(let i=0; i<offerIds.length; i++){
      if(this.oldaAsociateOffers.indexOf(offerIds[i]) === -1){
        await this.touristRoutesService.addOfferToTouristRoute(offerIds[i], tr_id).toPromise()
      }
    }

    for(let i=0; i<this.oldaAsociateOffers.length; i++){
      if(offerIds.indexOf(this.oldaAsociateOffers[i]) === -1){
        await this.touristRoutesService.deleteOfferFromTouristRoute(this.oldaAsociateOffers[i], tr_id).toPromise()
      }
    }
  }

  disableDialog(): boolean {
    if(!this.trFG.valid || this.associateOffers.length == 0 ||  this.loading == true ) {
      return true
    }
    return false
  }
}
