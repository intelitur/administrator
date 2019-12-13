import { Component, OnInit } from "@angular/core";
import { tileLayer, latLng, marker, Marker, Icon, icon, Point, point, divIcon } from "leaflet";

@Component({
  selector: "app-itinerary-map",
  templateUrl: "./itinerary-map.component.html",
  styleUrls: ["./itinerary-map.component.scss"]
})
export class ItineraryMapComponent implements OnInit {
  constructor() {}
  layers: Array<any> = new Array();
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "..."
      })
    ],
    zoom: 16,
    center: latLng(10.471743, -84.644702)
  };
  ngOnInit() {
    let markers = [
      {lat: 10.472039, long: -84.643214, title: 'escuela'},
      {lat: 10.472271, long: -84.643663, title: 'panaderia'}
    ];
    markers.forEach(mark => {
     this.layers.push(marker([mark.lat,mark.long],{
       icon:icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: '../../../../../assets/marker-icon.png',
        shadowUrl: '../../../../../assets/marker-shadow.png',
       }
      )
     }).bindPopup(mark.title))
   });

  }
}
