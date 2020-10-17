import { Component, Input, OnInit,ChangeDetectorRef } from "@angular/core";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table"; 
import { ServiceService } from "src/app/services/services/service.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
import { Filter } from "src/app/itinerary/models/Filter.interface";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
@Component({
  selector: "app-services-table",
  templateUrl: "./services-table.component.html",
  styleUrls: ["./services-table.component.scss"]
})
export class ServicesTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;
  filterItinerariesSubs: Subscription;
  dialogSubscription: Subscription;
  isFilters: boolean = false;
  @Input() active:boolean = true;
  counter = 0;
  constructor(
    private _dialog: DialogManagerService,
    private _service : ServiceService,
    private _common: CommonService,
    public sesionService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getServices();
  }
  isActive(){
    if(this.active){
      return true;
    }
    else{
      this.active = true;
      this.getServices();
      return true;
    }
  }
    /**
   * @function get services
   */
  getServices() {
    this.subscription = this._service
      .getServices()
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    this.isFilters = false;
  }
  /**
   * @function delete service
   */
  changeState(service_id:number){
    this.subscription = this._service.deleteService(service_id).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Servicio eliminado", "Ok");
          this.getServices();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  p(){
    this.active = false
  }

  /**
   * @function apply filter
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.dialogSubscription) this.dialogSubscription.unsubscribe();
  }
  /**
   * @funtion Assign id of itinerary to will used in other components
   * @param id
   */
  assignOfferId(id: number, name:string, descrpcion:string) {
    this._service.offer_id = id;
    this._service.offer_name = name;
    this._service.offer_descripcion = descrpcion;
  }
}
