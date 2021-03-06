import { Component, OnInit, Input } from "@angular/core";
import { OfferService } from "../../../services/offer.service";
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";
import { MatTableDataSource } from "@angular/material/table"; 
import { ServiceService } from "src/app/services/services/service.service";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/users/services/user.service";
import { ResponseInterface } from "src/app/globalModels/Response.interface";
import { MatDialog } from '@angular/material';
import { OfferAddServiceComponent } from '../offer-add-service/offer-add-service.component';
import { Router } from '@angular/router';

@Component({
  selector: "app-offer-services",
  templateUrl: "./offer-services.component.html",
  styleUrls: ["./offer-services.component.scss"]
})
export class OfferServicesComponent implements OnInit {

  constructor(private _offer: OfferService,
    private _dialog: DialogManagerService,
    private _service : ServiceService,
    private _common: CommonService,
    public sesionService: UserService,
    public dialogService: MatDialog,
    private router: Router
  ) {}
  displayedColumns: string[] = ["position", "name", "actions"];
  dataSource: MatTableDataSource<unknown>;
  subscription: Subscription;
  filterItinerariesSubs: Subscription;
  dialogSubscription: Subscription;
  isFilters: boolean = false;
  @Input() active:boolean = true;
  counter = 0;

  ngOnInit() {
    this._offer.offer_id === undefined ? this.router.navigate(['/offers/all']): this.getServices();
    
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
   * @function get minimal info of itinerary
   */
  getServices(){
    this.subscription = this._offer
      .getServicesByOffer(this._offer.offer_id)
      .subscribe({
        next: (data: any) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
    this.isFilters = false;
  }
  /**
   * @function delete  service to offer
   */
  deleteServiceToOffer(service_id:number){
    this.subscription = this._service.deleteServiceToOffer(service_id,this._offer.offer_id).subscribe({
        next: (result: ResponseInterface) => {
          this._common.openSnackBar("Servicio eliminado de la oferta", "Ok");
          this.getServices();
        },
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
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
   * @funtion Assign id, name, description of offer to will used in other components
   * @param id 
   * @param name 
   * @param descripcion 
   */
  assignOfferId(id: number, name:string, descripcion:string) {
    this._service.offer_id = id;
    this._service.offer_name = name;
    this._service.offer_descripcion = descripcion;
  }
  /***
   * @function open dialog that create news services
   */
  openCreateServiceDialog() {
    const dialog = this.dialogService.open(OfferAddServiceComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      if(data.status == 201){
        this.getServices();
      }
    })
  }
}
