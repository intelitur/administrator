import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Company } from 'src/app/company/models/Company';
import { Marker, tileLayer, latLng, Map, Draggable, Icon } from 'leaflet';
import { CommonService } from 'src/app/general-services/common.service';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-map',
  templateUrl: './company-map.component.html',
  styleUrls: ['./company-map.component.scss']
})
export class CompanyMapComponent implements OnInit, AfterViewInit {
  @Input() company: Company

  map: Map
  refreshed = false

  locationMarker: Marker = new Marker(
    latLng(10.471868647924616, -84.64508235454561)
    , {
      draggable: true,
      icon: new Icon({
        iconUrl: 'assets/marker-icon.png',
        iconSize: [24, 41],
        iconAnchor: [12, 41],
        shadowUrl: 'assets/marker-shadow.png'
      })
    })

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "..."
      })
    ],
    zoom: 16,
    center: latLng(10.471691479992346, -84.64503407478333)
  };
  constructor(
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(document.getElementById("mat-tab-label-0-2")){
      (document.getElementById("mat-tab-label-0-2") as any).parameters = { map: this.map, company: this.company }
      document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMapCallback, false);
    }
    setTimeout(() => this.map.invalidateSize(), 2000);
  }


  onMapReady(map: Map) {
    this.map = map;
    map.addLayer(this.locationMarker)
    if (this.company.latitude && this.company.longitude) {
      this.locationMarker.setLatLng(latLng(this.company.latitude, this.company.longitude))
    }
  }

  refreshMap(){
    if(!this.refreshed){
      this.map.invalidateSize()
      this.map.flyTo(latLng(this.company.latitude, this.company.longitude), 16)
      this.refreshed = true
    }
  }

  refreshMapCallback(event: any) {
    let { map, company } = event.currentTarget.parameters
    map.invalidateSize();
    setTimeout(() => map.flyTo(latLng(company.latitude, company.longitude), 16), 200)
  }

  putLocationMarker(event: any) {
    this.locationMarker.setLatLng(event.latlng);
  }

  updateCompanyLocation() {

    let updatedCompany = {
      ...this.company,
      latitude: this.locationMarker.getLatLng().lat,
      longitude: this.locationMarker.getLatLng().lng
    }
    console.log(updatedCompany)
    this.companyService.updateCompany(updatedCompany)
      .subscribe({
        next: (data: any) => {
          if (data.status == 204) {
            this.company = updatedCompany;
            this.commonService.openSnackBar(
              `La ubicación de ${this.company.name} ha sido actualizada`,
              "OK")
            this.map.flyTo(latLng(this.company.latitude, this.company.longitude), 16)
          }
          else {
            this.commonService.openSnackBar(
              `Error actualizar la ubicación: ${data.error}`,
              "OK"
            );
          }

        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        }
      })
  }

}
