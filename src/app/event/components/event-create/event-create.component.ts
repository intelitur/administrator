import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  eventFG: FormGroup
  allDay: boolean = false
  loading: boolean = false
  
  constructor(
    public dialogRef: MatDialogRef<EventCreateComponent>,
    public commonService: CommonService,
    public eventService: EventService
  ) { }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      detail: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      color: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      cost: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      /*
      initial_date: new FormControl(null, Validators.required),
      final_date: new FormControl(null, Validators.required),
      initial_time: new FormControl(null, Validators.required)
      final_time: new FormControl(null, Validators.required)
      */
    })
  }

  changeState(){
    this.allDay == false ? this.allDay=true : this.allDay=false
  }

  createEvent(){
    this.dialogRef.close()
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
