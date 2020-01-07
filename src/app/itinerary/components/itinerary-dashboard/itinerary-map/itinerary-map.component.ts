import { Component, OnInit } from "@angular/core";
import { tileLayer, latLng, marker, icon, Map } from "leaflet";
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { Marker } from 'src/app/itinerary/models/Marker';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: "app-itinerary-map",
  templateUrl: "./itinerary-map.component.html",
  styleUrls: ["./itinerary-map.component.scss"]
})
export class ItineraryMapComponent implements OnInit {
  markers: Array<Marker>;
  layers: Array<any> = new Array();
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "..."
      })
    ],
    zoom: 16,
    center: latLng(10.475215, -84.648328)
  };
  constructor(
    private itineraryService: ItineraryService,
    private _common: CommonService
  ) {
  }

  ngOnInit() {
    this.itineraryService.getEventGeomByItineraryID().subscribe({
      next: (data: any) => {
        this.markers = data.data;
        this.fillMarkers(); // Fill info
      },
      error: (err: HttpErrorResponse) => this._common.handleError(err)
    });
  }


  /**
   * @function Fill info markers
   */
  fillMarkers(){
    this.markers.forEach(mark => {
      this.layers.push(marker([mark.lat,mark.lon],{
        icon:icon({
         iconSize: [ 25, 41 ],
         iconAnchor: [ 13, 41 ],
         iconUrl: '../../../../../assets/marker-icon.png',
         shadowUrl: '../../../../../assets/marker-shadow.png',
        }
       )
      }).bindPopup(mark.name))
    });
  }

  onMapReady(map: Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 2000);
  }

}
