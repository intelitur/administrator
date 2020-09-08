import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Offer } from "src/app/offers/models/Offer";
import { Subscription } from "rxjs";
import { OfferService } from "src/app/offers/services/offer.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";

@Component({
  selector: "app-offer-form-dialog",
  templateUrl: "./offer-form-dialog.component.html",
  styleUrls: ["./offer-form-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OfferFormDialogComponent implements OnInit, OnDestroy {
  offerFG: FormGroup;
  private subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<OfferFormDialogComponent>,
    private _fb: FormBuilder,
    private _offer: OfferService,
    private _common: CommonService
  ) {}

  ngOnInit() {
    this.offerFG = this._fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
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
  onNoClick(){
    this.dialogRef.close()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
