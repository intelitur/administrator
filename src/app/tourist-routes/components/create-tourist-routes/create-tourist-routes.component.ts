import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TouristRoute } from '../../models/tourist-route';
import { TouristRoutesService } from '../../services/tourist-routes.service';

@Component({
  selector: 'app-create-tourist-routes',
  templateUrl: './create-tourist-routes.component.html',
  styleUrls: ['./create-tourist-routes.component.scss']
})
export class CreateTouristRoutesComponent implements OnInit {

  trFG: FormGroup;
  associateOffers: Array<any> = [];
  subscription: Subscription
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateTouristRoutesComponent>,
    public touristRoutesService: TouristRoutesService, 
    public offerService: CategoryService,//Cambiar
    public commonService: CommonService,
    public router: Router
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

  onSubmit(){
    this.loading = true;
    let tr: TouristRoute = {
      name: this.trFG.controls['name'].value
    }

    this.touristRoutesService.createTouristRoute(tr).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          
          let offers = this.getOfferIds();
          await this.asociateoffers(data.body[0], offers);
          this.commonService.openSnackBar(
            `El evento ${this.trFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate(['/tourist-routes', data.body[0]])
        } else {
          this.commonService.openSnackBar(
            `Error al crear el evento: ${data.error}`,
            "OK"
          );
          this.trFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.trFG.enable()
      }
    });
  }

  getOfferIds():Array<Number> {
    let ids: Array<Number> = [];
    this.associateOffers.forEach(elem => ids.push(elem.offer_id));
    return ids;
  }

  asociateoffers(tr_id:Number, offerIds: Array<Number>){
    offerIds.forEach(async offer_id => {
      await this.touristRoutesService.addOfferToTouristRoute(tr_id, offer_id).toPromise();
    });
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
