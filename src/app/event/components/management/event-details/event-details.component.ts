import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventType } from 'src/app/event/models/Event';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from 'src/app/event/services/event.service';
import { ColorEvent } from 'ngx-color';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: EventType;
  eventFG: FormGroup
  allDay: boolean = false;
  loading: boolean = false;
  color: string;
  initial_date: any = undefined;
  final_date: any = undefined;
  today: any = new Date();
  initial_time: any = undefined;
  final_time: any =  undefined;
  common_date: any = undefined;
  subscription: Subscription
  //chipList
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategories: any;//Contiene todos los tags activos
  allCategories: Array<any> = [];//Almacena los tags seleccionados
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    public commonService: CommonService,
    public eventService: EventService,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      detail: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      cost: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
      categories: new FormControl(null) 
    });

    this.subscription = this.categoryService.getAllCategories(1)
    .subscribe({
      next: (data: any) => {
        this.filteredCategories = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });

    console.log(this.event)
    this.setData();
  }

  /**
   * Toogle
   * @param param0 
   */
  changeState({source}: any){
    this.allDay == false ? this.allDay=true : this.allDay=false;
    source.checked = this.allDay;
  }

  /**
   * Color picker
   * @param event 
   */
  changeComplete(event: ColorEvent){
    this.color = event.color.hex;
  }

  /**
   * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
   */
  dateFilter = (date: Date): boolean => {
    return date >= this.initial_date
  }

  disableDialog(): boolean {
    if(!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || 
    (this.allDay == false && this.final_date== undefined) || 
    (this.allDay == true && this.initial_time == undefined) || 
    (this.allDay == true && this.final_time == undefined ) || 
    (this.allDay == true && this.common_date == undefined))  {
      return true
    }
    return false
  }

  setData(){
    this.eventFG.controls['name'].setValue(this.event.name)
    this.eventFG.controls['cost'].setValue(this.event.cost)
    this.eventFG.controls['address'].setValue(this.event.address)
    this.eventFG.controls['detail'].setValue(this.event.detail)
    this.allDay = this.event.all_day
    this.color = this.event.color
    this.initial_date = new Date(this.event.date_range.initial_date)
    this.final_date = new Date(this.event.date_range.final_date)
    this.initial_time = this.event.initial_time
    this.final_time = this.event.final_time
    this.allDay?  this.common_date = this.event.date_range.initial_date : this.common_date = undefined; 
    //añadir el endpoint para obtener todas la categorías del evento   
  }

  //chipList 
  remove(category: string): void {
    let index = this.allCategories.indexOf(category)
    if (index >= 0) {
      this.allCategories.splice(index, 1);
    }
  }

  /**
   * Añade el tag seleccionado a la lista para mostarlo y lo guarda
   * @param event 
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    let index = this.allCategories.indexOf(event.option.value);
    if (index < 0) {
      this.allCategories.push(event.option.value)
      this.eventFG.controls['categories'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La categoría ya ha sido agregada!",
        "OK"
      );
    }
  }

  /**
   * Metodo para obtener únicamente los ids de los tags que se guardaron 
   */
  getCategories() {
    let categoryIDs: Array<any> = [];
    for (let i = 0; i < this.allCategories.length; i++) {
      categoryIDs.push(this.allCategories[i].category_id)
    }
    this.allCategories = categoryIDs;
  }


  modifyEvent(){

    this.loading = true;
    this.eventFG.disable()

    this.allDay == true? (this.initial_date=this.common_date , this.final_date=this.common_date) : null; 
    this.initial_time == undefined? this.initial_time = null: null;
    this.final_time == undefined? this.final_time = null: null;

    let event: EventType = {
      event_id: this.event.event_id,
      name: this.eventFG.controls['name'].value,
      cost: this.eventFG.controls['cost'].value,
      address: this.eventFG.controls['address'].value,
      detail: this.eventFG.controls['detail'].value,
      all_day: this.allDay,
      color:  this.color,
      date_range: {
        initial_date: this.initial_date,
        final_date: this.final_date
      },
      initial_time: this.initial_time,
      final_time: this.final_time,
    }
     
    let json = {
      "info": event,
      "latitude": this.event.latitude,
      "longuitude": this.event.longitude
    } 

    console.log(json)
    this.eventService.modifyEvent(json).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          this.loading = false;
          this.eventFG.enable()
          this.event= event;
          this.commonService.openSnackBar(
            `El evento ${this.event.name} ha sido cambiado`,
            "OK")
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }

      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.eventFG.enable()
      }
    })
  }

  changeEventState(event: EventType, {source}: any){
  
    this.eventService.changeEventState(event.event_id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          event.is_active = !event.is_active;
          source.checked = event.is_active
          if (event.is_active)
            this.commonService.openSnackBar(
              `El evento ${event.name} ha sido activado`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `El evento ${event.name} ha sido desactivado`,
              "OK"
            );
        } else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        source.checked = event.is_active
      }
    });
  }

}