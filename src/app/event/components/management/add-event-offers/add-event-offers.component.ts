import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { EventService } from 'src/app/event/services/event.service';
import { CommonService } from 'src/app/general-services/common.service';
import { OfferService } from 'src/app/offers/services/offer.service';

@Component({
  selector: 'app-add-event-offers',
  templateUrl: './add-event-offers.component.html',
  styleUrls: ['./add-event-offers.component.scss']
})
export class AddEventOffersComponent implements OnInit {

  offersFG: FormGroup;
  subscription: Subscription;
  subscription2: Subscription;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredOffers: any;
  allOffers: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  

  constructor(
    public dialogRef: MatDialogRef<AddEventOffersComponent>,
    public offersService: OfferService,
    public commonService: CommonService,
    public eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.offersFG = new FormGroup({
      offers: new FormControl(null),
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit() {
    this.subscription = this.offersService.getOffers().subscribe({
      next: (data: any) => {
        this.filteredOffers = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  async onSubmit(){
    await this.addOfferToEvent(this.data.event_id);
  }

  removeOffer(offer) {
    let index = this.allOffers.indexOf(offer)
    if (index >= 0) {
      this.allOffers.splice(index, 1);
    }
    this.offersFG.controls['offers'].setValue(null);
  }

  /**
   * Añade el tag seleccionado a la lista para mostarlo y lo guarda
   * @param event 
   */
  selectedOffer(event: MatAutocompleteSelectedEvent): void {
    let index = this.allOffers.indexOf(event.option.value);
    if (index < 0) {
      this.allOffers.push(event.option.value)
      this.offersFG.controls['offers'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La oferta ya ha sido agregada!",
        "OK"
      );
    }
    this.offersFG.controls['offers'].setValue(null);
  }

  async addOfferToEvent(event_id: Number){
    
    this.allOffers.forEach(async offer => {
      let index = this.offersService.offers.indexOf(offer);
      if(index < 0){
        await this.eventService.addOfferToEvent(event_id, offer.offer_id).toPromise();
      }
    });
    
    await this.eventService.getEventOffers(event_id).toPromise().then(
      () => {
        this.closeDialog();
      }
    )

    this.commonService.openSnackBar("Se han añadido las ofertas con éxito", "OK");
    
  }  
}
