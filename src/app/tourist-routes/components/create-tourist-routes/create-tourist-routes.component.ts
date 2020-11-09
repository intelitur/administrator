import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TouristRoute } from '../../models/tourist-route';
import { TouristRoutesService } from '../../services/tourist-routes.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { OfferService } from 'src/app/offers/services/offer.service';

@Component({
  selector: 'app-create-tourist-routes',
  templateUrl: './create-tourist-routes.component.html',
  styleUrls: ['./create-tourist-routes.component.scss']
})
export class CreateTouristRoutesComponent implements OnInit {

  trFG: FormGroup;
  subscription: Subscription
  loading: boolean = false;


  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredOffers: any;
  allOffers: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    public dialogRef: MatDialogRef<CreateTouristRoutesComponent>,
    public touristRoutesService: TouristRoutesService, 
    public offerService: OfferService,
    public commonService: CommonService,
    public router: Router
  ) { 
    this.trFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      offers: new FormControl(null)
    })
  }

  ngOnInit() {
    this.subscription = this.offerService.getOffers()
    .subscribe({
      next: (data: any) => {
        this.filteredOffers = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  onSubmit(){
    this.loading = true;
    let tr: TouristRoute = {
      name: this.trFG.controls['name'].value
    }

    this.touristRoutesService.createTouristRoute(tr).subscribe({
      next: async (data: any) => {
        if (data.status == 201) {
          await this.asociateoffers(data.body[0]);
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

  removeOffer(category: string): void {
    let index = this.allOffers.indexOf(category)
    if (index >= 0) {
      this.allOffers.splice(index, 1);
    }
  }

  selectedOffer(event: MatAutocompleteSelectedEvent): void {
    let index = this.allOffers.indexOf(event.option.value);
    if (index < 0) {
      this.allOffers.push(event.option.value)
      this.trFG.controls['offers'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La oferta ya ha sido agregada!",
        "OK"
      );
    }
  }

  asociateoffers(tr_id:Number){
    this.allOffers.forEach(async offer => {
      await this.touristRoutesService.addOfferToTouristRoute(tr_id, offer.offer_id).toPromise();
    });
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
