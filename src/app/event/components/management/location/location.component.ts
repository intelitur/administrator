import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { Marker, tileLayer, latLng, Map, Icon } from 'leaflet';
import { CommonService } from 'src/app/general-services/common.service';
import { EventType } from 'src/app/event/models/Event';
import { EventService } from 'src/app/event/services/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit,  AfterViewInit {

  @Input() myEvent: EventType

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
    private eventService: EventService,
    private route: ActivatedRoute
  ) { 
    this.refreshMap = this.refreshMap.bind(this)
  }

  ngOnInit() {
    this.myEvent = this.myEvent[0]
  }

  ngAfterViewInit() {
    if(document.getElementById("mat-tab-label-0-2")){
      (document.getElementById("mat-tab-label-0-2") as any).parameters = { map: this.map, event: this.myEvent }
      document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
    }
    setTimeout(() => this.map.invalidateSize(), 2000);
  }


  onMapReady(map: Map) {
    this.map = map;
    map.addLayer(this.locationMarker)
    if (this.myEvent.latitude && this.myEvent.longitude) {
      this.locationMarker.setLatLng(latLng(this.myEvent.latitude, this.myEvent.longitude))
    }
  }

  refreshMap(){
    this.map.invalidateSize()
    if(!this.refreshed){
      this.refreshed = true
      if(this.myEvent.latitude && this.myEvent.longitude)
        this.map.flyTo(latLng(this.myEvent.latitude, this.myEvent.longitude), 18)
    }
  }

  putLocationMarker(event: any) {
    this.locationMarker.setLatLng(event.latlng);
  }

  updateEventLocation() {

    console.log(this.myEvent)

    let infoEvent: EventType = {
      address: this.myEvent.address,
      all_day: this.myEvent.all_day,
      color: this.myEvent.color,
      cost: this.myEvent.cost,
      date_range: this.myEvent.date_range,
      detail: this.myEvent.detail,
      final_time: this.myEvent.final_time,
      initial_time: this.myEvent.initial_time,
      name: this.myEvent.name,
      event_id: this.myEvent.event_id,
    }

    let updatedEvent = {
      info: infoEvent,
      latitude: this.locationMarker.getLatLng().lat,
      longitude: this.locationMarker.getLatLng().lng
    }
    this.eventService.modifyEvent(updatedEvent)
      .subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.myEvent = updatedEvent.info;
            this.myEvent.latitude = updatedEvent.latitude;
            this.myEvent.longitude = updatedEvent.longitude;
            this.commonService.openSnackBar(
              `La ubicación de ${this.myEvent.name} ha sido actualizada`,
              "OK")
            this.map.flyTo(latLng(this.myEvent.latitude, this.myEvent.longitude), 18)
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
