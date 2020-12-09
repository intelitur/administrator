import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { GeographicLayersService } from '../../services/geographic-layers.service';
import { CreateGeographicLayerComponent } from '../create-geographic-layer/create-geographic-layer.component';

@Component({
  selector: 'app-all-geographic-layers',
  templateUrl: './all-geographic-layers.component.html',
  styleUrls: ['./all-geographic-layers.component.scss']
})
export class AllGeographicLayersComponent implements OnInit {

  filter: any = {
    layer_name: ''
  }
  subscription: Subscription;
  loading = false;

  constructor(
    public geographicLayerService: GeographicLayersService,
    public commonService: CommonService,
    public dialogService: MatDialog,
  ) { }

  ngOnInit() {
    this.getLayers()
  }

  getLayers(){
    this.subscription = this.geographicLayerService.getLayers().subscribe({
      next: (data: any) => {
        console.log(data)
        this.geographicLayerService.layers = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
    })
  }

  openCreateDialog(){
    this.dialogService.open(CreateGeographicLayerComponent, {
      height: "95%",
      width: "70%",
      minWidth: "280px",
      disableClose: true,
    });
  }

  delete(layer){
    this.commonService
    .confirmationDialog(`¿Desea eliminar la capa: ${layer.layer_name}?`)
    .then(async (result) => {
      if (result) {
        this.geographicLayerService.deleteLayer(layer.layer_id).subscribe({
          next: (data: any) => {
            if(data.status == 200) {
              this.commonService.openSnackBar(`La capa ${layer.layer_name} ha sido eliminada`, "OK");
              this.getLayers()
            }else{
              this.commonService.openSnackBar(
                "Ha ocurrido un error al intentar eliminar la capa geográfica",
                "OK"
              );
              console.log(data.error);
            }
          },
          error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        })
      }
    })
  }
}
