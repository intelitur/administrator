import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Marker, tileLayer, latLng, Map, Icon } from 'leaflet';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ads } from 'src/app/ads/models/Ads';
import { AdsService } from 'src/app/ads/services/ads.service';

@Component({
  selector: 'app-ads-location',
  templateUrl: './ads-location.component.html',
  styleUrls: ['./ads-location.component.scss']
})
export class AdsLocationComponent implements OnInit,  AfterViewInit {

  @Input() myAd: Ads;
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
    private commonService: CommonService,
    private adsService: AdsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(document.getElementById("mat-tab-label-0-2")){
      (document.getElementById("mat-tab-label-0-2") as any).parameters = { map: this.map, event: this.myAd }
      document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
    }
    setTimeout(() => this.map.invalidateSize(), 2000);
  }

  onMapReady(map: Map) {
    this.map = map;
    map.addLayer(this.locationMarker)
    if (this.myAd.latitude && this.myAd.longitude) {
      this.locationMarker.setLatLng(latLng(this.myAd.latitude, this.myAd.longitude))
    }
  }

  refreshMap(){
    this.map.invalidateSize()
    if(!this.refreshed){
      this.refreshed = true
      if(this.myAd.latitude && this.myAd.longitude)
        this.map.flyTo(latLng(this.myAd.latitude, this.myAd.longitude), 18)
    }
  }

  putLocationMarker(event: any) {
    this.locationMarker.setLatLng(event.latlng);
  }

  updateEventLocation() {

    console.log(this.myAd)

    let infoAd: Ads = {
      ad_id: this.myAd.ad_id,
      name: this.myAd.name,
      description: this.myAd.description,
      company_id: this.myAd.company_id,
      date_range: {
        initial_date: this.myAd.date_range.initial_date,
        final_date: this.myAd.date_range.final_date
      },
      is_active: this.myAd.is_active
    }

    let updatedAd = {
      info: infoAd,
      latitude: this.locationMarker.getLatLng().lat,
      longitude: this.locationMarker.getLatLng().lng
    }
    this.adsService.modifyAd(updatedAd)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.myAd = updatedAd.info;
            this.myAd.latitude = updatedAd.latitude;
            this.myAd.longitude = updatedAd.longitude;
            this.commonService.openSnackBar(
              `La ubicación de ${this.myAd.name} ha sido actualizada`,
              "OK")
            this.map.flyTo(latLng(this.myAd.latitude, this.myAd.longitude), 18)
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
