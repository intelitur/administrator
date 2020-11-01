import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { CategoryService } from "src/app/category/services/category.service";
import { CommonService } from "src/app/general-services/common.service";
import { OfferService } from "src/app/offers/services/offer.service";
import { TouristRoute } from "src/app/tourist-routes/models/tourist-route";
import { TouristRoutesService } from "src/app/tourist-routes/services/tourist-routes.service";

@Component({
  selector: "app-tourist-routes-details",
  templateUrl: "./tourist-routes-details.component.html",
  styleUrls: ["./tourist-routes-details.component.scss"],
})
export class TouristRoutesDetailsComponent implements OnInit {

  @Input() myRoute: TouristRoute;
  loading: boolean = false;
  trFG: FormGroup;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    public touristRoutesService: TouristRoutesService,
    public offerService: OfferService,
    public commonService: CommonService,
    public router: Router
  ) {
    this.trFG = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.trFG.controls["name"].setValue(this.myRoute.name);
  }

  modifyRoute() {
    this.loading = true;
    let tr: TouristRoute = {
      route_id: this.myRoute.route_id,
      name: this.trFG.controls["name"].value,
      is_active: this.myRoute.is_active,
    };

    this.touristRoutesService.modifyTouristRute(tr).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          this.trFG.enable();
          this.myRoute = tr;

          this.commonService.openSnackBar(
            `La ruta turística ${this.myRoute.name} ha sido cambiada`,
            "OK"
          );
          this.loading = false;
        } else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.loading = false;
        this.trFG.enable();
      },
    });
  }

  changeState(touristRoute: TouristRoute, { source }: any) {
    if (this.myRoute.is_active) {
      this.commonService.confirmationDialog(`¿Desea eliminar la ruta: ${touristRoute.name}?`).then(async (result) => {
        if (result) {
          this.touristRoutesService
          .changeTouristRouteState(touristRoute.route_id)
          .subscribe({
            next: (data: any) => {
              if (data.status == 200) {
                touristRoute.is_active = !touristRoute.is_active;
                source.checked = touristRoute.is_active;
                this.commonService.openSnackBar(
                  `La ruta turística ${touristRoute.name} ha sido desactivada`,
                  "OK"
                );
                this.router.navigate(['/tourist-routes/all'])
              } else {
                this.commonService.openSnackBar(
                  `Error al cambiar el estado: ${data.error}`,
                  "OK"
                );
              }
            },
            error: (err: HttpErrorResponse) => {
              this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
              source.checked = touristRoute.is_active;
            },
          });
        }else{
          source.checked = touristRoute.is_active;
        }
      });
    } else {
      this.commonService.openSnackBar("No se puede reactivar una ruta", "OK");
      source.checked = touristRoute.is_active;
    }
  }

  disableDialog(): boolean {
    if (!this.trFG.valid || this.loading == true) {
      return true;
    }
    return false;
  }
}
