import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { TransportService } from "src/app/transport-services/models/transport-service";
import { TransportServicesCategoriesService } from "src/app/transport-services/services/transport-services-categories.service";
import { TransportServicesService } from "src/app/transport-services/services/transport-services.service";

@Component({
  selector: "app-details-transport-services",
  templateUrl: "./details-transport-services.component.html",
  styleUrls: ["./details-transport-services.component.scss"],
})
export class DetailsTransportServicesComponent implements OnInit {
  @Input() transport: TransportService;
  loading: boolean = false;
  transportServicesFG: FormGroup;
  categories;
  subscription: Subscription;

  constructor(
    public categoryService: TransportServicesCategoriesService,
    public commonService: CommonService,
    public transportService: TransportServicesService
  ) {
    this.transportServicesFG = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]"),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("^(.{1,})[@](.{1,})[.](.{1,})$"),
      ]),
      phone_number: new FormControl(null, [
        Validators.required,
        Validators.pattern("^([0-9]{4}[ ][0-9]{4})$"),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]"),
      ]),
      categories: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.subscription = this.categoryService
      .getTransportServicesCategories()
      .subscribe({
        next: (data: any) => {
          this.categories = data;
          this.subscription.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
      this.setData()
  }

  setData() {
    this.transportServicesFG.controls["name"].setValue(this.transport.name),
      this.transportServicesFG.controls["email"].setValue(this.transport.email),
      this.transportServicesFG.controls["phone_number"].setValue(
        this.transport.tel
      ),
      this.transportServicesFG.controls["address"].setValue(
        this.transport.hire_dir
      ),
      this.transportServicesFG.controls["categories"].setValue(
        this.transport.category
      );
  }

  changeState({ source }: any) {
    if (this.transport.is_active) {
      this.commonService
        .confirmationDialog(
          `¿Desea eliminar el servicio de transporte: ${this.transport.name}?`
        )
        .then(async (result) => {
          if (result) {
            this.transportService
              .changeTransportServiceState(this.transport)
              .subscribe({
                next: (data: any) => {
                  if (data.status == 201) {
                    this.transport.is_active = !this.transport.is_active;
                    source.checked = this.transport.is_active;
                    this.commonService.openSnackBar(
                      `El evento ${this.transport.name} ha sido eliminado`,
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
                  this.commonService.openSnackBar(
                    `Error: ${err.message}`,
                    "OK"
                  );
                  source.checked = this.transport.is_active;
                },
              });
          } else {
            source.checked = this.transport.is_active;
          }
        });
    } else {
      source.checked = this.transport.is_active;
      this.commonService.openSnackBar(
        "No se puede reactivar un servicio de transporte",
        "OK"
      );
    }
  }

  modifyTransportService() {
    this.loading = true;
    this.transportServicesFG.disable();

    let newTransportService: TransportService = {
      transport_id: this.transport.transport_id,
      name: this.transportServicesFG.controls["name"].value,
      email: this.transportServicesFG.controls["email"].value,
      tel: this.transportServicesFG.controls["phone_number"].value,
      hire_dir: this.transportServicesFG.controls["address"].value,
      category: this.transportServicesFG.controls["categories"].value,
      is_active: this.transport.is_active,
    };

    this.transportService
      .modifyTransportService(newTransportService)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.transport = newTransportService;
            this.commonService.openSnackBar(
              `El servicio de transporte: ${this.transport.name} ha sido cambiado`,
              "OK"
            );
            this.loading = false;
            this.transportServicesFG.enable();
          } else {
            this.commonService.openSnackBar(
              `Error al cambiar el servicio: ${data.error}`,
              "OK"
            );
            this.loading = false;
            this.transportServicesFG.enable();
          }
        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
          this.loading = false;
          this.transportServicesFG.enable();
        },
      });
  }
}
