import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from '../../services/event.service';
import { ColorEvent } from 'ngx-color';
import { EventType } from '../../models/Event';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

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

  
  constructor(
    public dialogRef: MatDialogRef<EventCreateComponent>,
    public commonService: CommonService,
    public eventService: EventService,
    public router: Router
  ) { }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      detail: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      cost: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]{1,}[.][0-9]{1,})*$")]) 
    });
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

  onSubmit(){

    this.allDay == true? (this.initial_date=this.common_date , this.final_date=this.common_date) : null; 

    let event: EventType = {
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
      final_time: this.final_time
    }
    console.log(this.initial_date)
    console.log(this.final_date)
    console.log(this.common_date)
    this.createEvent(event);
  }

  createEvent(event: EventType){

    this.loading = true;
    this.eventFG.disable();
    this.eventService.createEvent(event).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.commonService.openSnackBar(
            `El evento ${this.eventFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate(['/event', data.body.event_id])
        } else {  
          this.commonService.openSnackBar(
            `Error al crear el evento: ${data.error}`,
            "OK"
          );
          this.eventFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.eventFG.enable()
      }
    });
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
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
}
