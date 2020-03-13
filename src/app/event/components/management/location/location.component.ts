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

  @Input() event: EventType

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
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(document.getElementById("mat-tab-label-0-2")){
      (document.getElementById("mat-tab-label-0-2") as any).parameters = { map: this.map, event: this.event }
      document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMapCallback, false);
    }
    setTimeout(() => this.map.invalidateSize(), 2000);
  }


  onMapReady(map: Map) {
    this.map = map;
    map.addLayer(this.locationMarker)
    if (this.event.latitude && this.event.longitude) {
      this.locationMarker.setLatLng(latLng(this.event.latitude, this.event.longitude))
    }
  }

  refreshMap(){
    if(!this.refreshed){
      this.map.invalidateSize()
      this.map.flyTo(latLng(this.event.latitude, this.event.longitude), 18)
      this.refreshed = true
    }
  }

  refreshMapCallback(_event: any) {
    let { map, event } = _event.currentTarget.parameters
    map.invalidateSize();
    setTimeout(() => map.flyTo(latLng(event.latitude, event.longitude), 18), 200)
  }

  putLocationMarker(event: any) {
    this.locationMarker.setLatLng(event.latlng);
  }

  updateEventLocation() {

    let updatedEvent = {
      ...this.event,
      latitude: this.locationMarker.getLatLng().lat,
      longitude: this.locationMarker.getLatLng().lng
    }
    this.eventService.modifyEvent(updatedEvent)
      .subscribe({
        next: (data: any) => {
          if (data.status == 204) {
            this.event = updatedEvent;
            this.commonService.openSnackBar(
              `La ubicación de ${this.event.name} ha sido actualizada`,
              "OK")
            this.map.flyTo(latLng(this.event.latitude, this.event.longitude), 18)
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
