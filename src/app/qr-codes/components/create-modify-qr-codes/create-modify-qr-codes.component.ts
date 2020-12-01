import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Subscription } from "rxjs";
import { AdsService } from "src/app/ads/services/ads.service";
import { ContestsService } from "src/app/contests/services/contests.service";
import { EventService } from "src/app/event/services/event.service";
import { AuthService } from "src/app/general-services/auth.service";
import { CommonService } from "src/app/general-services/common.service";
import { ItineraryService } from "src/app/itinerary/services/itinerary.service";
import { TouristRoutesService } from "src/app/tourist-routes/services/tourist-routes.service";
import { QRCode } from "../../models/qr-code";
import { QrCodesService } from "../../services/qr-codes.service";

@Component({
  selector: "app-create-modify-qr-codes",
  templateUrl: "./create-modify-qr-codes.component.html",
  styleUrls: ["./create-modify-qr-codes.component.scss"],
})
export class CreateModifyQrCodesComponent implements OnInit {
  types = [
    { name: "Anuncios", id: "ads" },
    { name: "Concurso", id: "contest" },
    { name: "Evento", id: "event" },
    { name: "Itinerario", id: "itinerary" },
    { name: "Ruta Turística", id: "tourist route" },
  ];
  elements = [];
  elementType = undefined;
  qrForm: FormGroup;
  loading: boolean = false;
  action: string;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateModifyQrCodesComponent>,
    public eventService: EventService,
    public commonService: CommonService,
    public contestService: ContestsService,
    public adService: AdsService,
    public itineraryService: ItineraryService,
    public authService: AuthService,
    public touristRouteService: TouristRoutesService,
    public qrCodesService: QrCodesService
  ) {
    this.qrForm = new FormGroup({
      element: new FormControl(null, Validators.required),
      description: new FormControl(null, [
        Validators.required,
        Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]"),
      ]),
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.data.action
      ? (this.action = "Crear QR")
      : (this.action = "Modificar QR");
    this.data.action
      ? (this.title = "Creación de Código QR")
      : (this.title = "Modificación de Código QR");
    this.data.action ? null : this.setData();
  }

  async setData() {
    let qr: QRCode = this.data.qr;
    this.elementType = qr.e_type;
    this.elementChanged(qr.e_id);
    this.qrForm.controls["description"].setValue(qr.description);
  }

  async elementChanged(element_id?) {
    this.loading = true;
    let element = undefined;

    if (this.elementType == "event") {
      await this.eventService
        .getAllEvents()
        .toPromise()
        .then((data: any) => {
          this.elements = data;
          element = this.elements.find(function (value) {
            return value.event_id == element_id;
          });
        });
    } else if (this.elementType == "contest") {
      await this.contestService
        .getContests()
        .toPromise()
        .then((data: any) => {
          this.elements = data;
          element = this.elements.find(function (value) {
            return value.contest_id == element_id;
          });
        });
    } else if (this.elementType == "ads") {
      await this.adService
        .getAllAds()
        .toPromise()
        .then((data: any) => {
          this.elements = data;
          element = this.elements.find(function (value) {
            return value.ad_id == element_id;
          });
        });
    } else if (this.elementType == "itinerary") {
      await this.itineraryService
        .getItineraryMinimalInfoByUser(this.authService.getUser().user_id)
        .toPromise()
        .then((data: any) => {
          this.elements = data.data;
          element = this.elements.find(function (value) {
            return value.itinerary_id == element_id;
          });
        });
    } else if (this.elementType == "tourist route") {
      await this.touristRouteService
        .getTouristRoutes(true)
        .toPromise()
        .then((data: any) => {
          this.elements = data;
          element = this.elements.find(function (value) {
            return value.route_id == element_id;
          });
        });
    }
    element == undefined
      ? this.qrForm.controls["element"].setValue(null)
      : this.qrForm.controls["element"].setValue(element);

    this.loading = false;
  }

  submit() {
    let element_id: Number = this.getElementId(
      this.qrForm.controls["element"].value
    );

    let qr: QRCode = {
      description: this.qrForm.controls["description"].value,
      e_id: element_id,
      e_type: this.elementType,
    };
    this.data.action ? null : (qr.qr_id = this.data.qr.qr_id);
    this.data.action ? null : (qr.visits = this.data.qr.visits);
    this.data.action ? this.create(qr) : this.modify(qr);
  }

  getElementId(element): Number {
    if (this.elementType == "event") {
      element = this.elements.find(function (value) {
        return value == element;
      }).event_id;
    } else if (this.elementType == "contest") {
      element = this.elements.find(function (value) {
        return value == element;
      }).contest_id;
    } else if (this.elementType == "ads") {
      element = this.elements.find(function (value) {
        return value == element;
      }).ad_id;
    } else if (this.elementType == "itinerary") {
      element = this.elements.find(function (value) {
        return value == element;
      }).itinerary_id;
    } else if (this.elementType == "tourist route") {
      element = this.elements.find(function (value) {
        return value == element;
      }).route_id;
    }
    return element;
  }

  create(qr: QRCode) {
    this.loading = true;
    this.qrForm.disable();

    this.qrCodesService.create(qr).subscribe({
      next: (data: any) => {
        if (data.status == 201) {
          this.commonService.openSnackBar(
            "El código QR ha sido creado éxitosamente",
            "OK"
          );
          this.getQRCodes();
        } else {
          this.commonService.openSnackBar(
            "Ha ocurrido un error al intentar crear el código QR",
            "OK"
          );
          console.log(data.error);
          this.qrForm.enable();
          this.loading = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.loading = false;
        this.qrForm.enable();
      },
    });
  }

  modify(qr: QRCode) {
    this.loading = true;
    this.qrForm.disable();

    this.qrCodesService.modify(qr).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          this.commonService.openSnackBar(
            "El código QR ha sido editado éxitosamente",
            "OK"
          );
          this.getQRCodes();
        } else {
          this.commonService.openSnackBar(
            "Ha ocurrido un error al intentar editar el código QR",
            "OK"
          );
          console.log(data.error);
          this.qrForm.enable();
          this.loading = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.loading = false;
        this.qrForm.enable();
      },
    });
  }

  getQRCodes() {
    this.qrCodesService.getQRCodes().subscribe({
      next: (data: any) => {
        this.qrCodesService.qrCodes = data;
        this.closeDialog();
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(
          "Ha ocurrido un error, por favor refresque la página",
          ""
        );
        this.closeDialog();
      },
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
