import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { Marker, tileLayer, latLng, Map, Icon } from 'leaflet';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit {

  eventFiltersFG: FormGroup
  categories: any;
  currentRate = 0;
  ubcationRatio = 0;
  private subscription: Subscription;
  start_Date = undefined;
  end_Date = undefined;

  //Map
  map: Map
  refreshed = false

  myEvent = {
    latitude: 10.471691479992346,
    longitude: -84.64503407478333
  }

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
    public dialogRef: MatDialogRef<EventFiltersComponent>,
    public categoryService: CategoryService,
    public commonService: CommonService
  ) {
    this.refreshMap = this.refreshMap.bind(this)
   }

  ngOnInit() {
    this.eventFiltersFG = new FormGroup({
      categories: new FormControl(null, Validators.required),
      rate: new FormControl(null, Validators.pattern("^([0-5]{1}([.]{1}[0-9]){0,1})")),
      ratio: new FormControl(null,[Validators.max(3), Validators.min(1)])
    })

    this.subscription = this.categoryService.getAllCategories(1).subscribe({
      next: (data: any) => {
        this.categories = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
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

  onNoClick(){
    this.dialogRef.close()
  }

  submit(){
    let initialDate = this.formatDates(this.start_Date)
    let finalDate = this.formatDates(this.end_Date)
    let info = {
      initial_date: initialDate,
      final_date: finalDate,
      category_id: this.eventFiltersFG.controls['categories'].value != null? this.eventFiltersFG.controls['categories'].value: undefined,
      rate: this.currentRate != 0? this.currentRate: undefined,
      latitude: this.ubcationRatio != 0? this.locationMarker.getLatLng().lat: undefined,
      longitude: this.ubcationRatio != 0? this.locationMarker.getLatLng().lng: undefined,
      ratio: this.ubcationRatio != 0? this.ubcationRatio*1000: undefined
    }
    console.log(info)
    this.dialogRef.close(info)
  }

  closeDialog(){
    this.dialogRef.close()
  }

  formatDates(date: Date){
    if(date != undefined){
      date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 )

      let year = date.getFullYear()
      let month = (date.getMonth()+1) >= 10? (date.getMonth()+1) : "0"+(date.getMonth()+1) 
      let day = date.getDate() >= 10? date.getDate(): "0"+date.getDate()
      return year+"-"+month+"-"+day 
    }
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }

  disableDialog(): boolean {
    if((!this.eventFiltersFG.valid && this.start_Date  == undefined && this.start_Date == undefined && this.currentRate == 0  && this.ubcationRatio == 0) || (this.start_Date != undefined && this.end_Date == undefined) || 
      this.ubcationRatio > 3 || this.start_Date > this.end_Date){
        return true;
    }
    return false;
  }

  updateRateInput(rate){
    !Number(rate) ? this.currentRate = 0 : 
    rate <= 5 ?  this.currentRate = +parseFloat(rate).toFixed(1) : this.currentRate = 0;  
  }

  updateUbicationInput(ratio){
    !Number(ratio) ? this.ubcationRatio = 0 : 
    ratio <= 5 ?  this.ubcationRatio = +parseInt(ratio) : this.ubcationRatio = 0;  
  }
}
