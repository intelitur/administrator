import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/general-services/auth.service";
import { CommonService } from "src/app/general-services/common.service";
import { TransportService } from "../../models/transport-service";
import { TransportServicesService } from "../../services/transport-services.service";

@Component({
  selector: "app-request-transport-services",
  templateUrl: "./request-transport-services.component.html",
  styleUrls: ["./request-transport-services.component.scss"],
})
export class RequestTransportServicesComponent implements OnInit {
  filter: any = {
    status: '2',
    info: {
      name: "",
    },
  };
  request: any = [];
  loading: boolean = false;

  constructor(
    public transportService: TransportServicesService,
    public authService: AuthService,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.getTransportSerivicesRequest()
  }

  getTransportSerivicesRequest() {
    this.loading = true;
    let state = Number(this.filter.status)

    this.transportService
      .getTranspotServicesPetitions(state)
      .subscribe({
        next: (data: any) => {
          this.request = data;
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK"),
          this.loading = false;
        }
      });
  }

  changeStateRequest(ts: TransportService, state: Number) {
    let msg;
    msg = state == 1 ? "aceptado." : "rechazado.";
    this.transportService
      .changeRequestState(ts.transport_service_id, state)
      .subscribe({
        next: (data: any) => {
          data.status == 200 ? this.getTransportSerivicesRequest() : null;
          data.status == 200
            ? this.commonService.openSnackBar(`El evento ha sido ${msg}`, "OK")
            : null;
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK"),
      });
  }
}
