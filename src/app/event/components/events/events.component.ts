import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventType } from '../../models/Event';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { EventCreateComponent } from '../event-create/event-create.component'
import { EventFiltersComponent } from './event-filters/event-filters.component';
import { CategoryService } from 'src/app/category/services/category.service';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  filter = {
    name: ""
  }
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public eventService: EventService,
    public commonService: CommonService,
    public dialogService: MatDialog,
    public categoryService: CategoryService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.obtainAllEvents()
  }

  obtainAllEvents(){
    this.isFilters = false
    this.subscription = this.eventService.getAllEvents()
    .subscribe({
      next: (data: any) => {
        this.eventService.events = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  openCreateEventDialog(){
    this.dialogService.open(EventCreateComponent, {height:"95%", width: "80%", minWidth: "280px", disableClose: true})
  }

  changeState(event: EventType, {source}: any){
  
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

  openShowFilterOptionsDialog(){
    const  dialog = this.dialogService.open(EventFiltersComponent, {width: "50", minWidth: "280px", disableClose: true})

    dialog.afterClosed().subscribe( category_id => {
      if(category_id != undefined){
        this.isFilters = true
        this.subscription = this.categoryService.getEventsByCategory(category_id)
        .subscribe({
          next: (data: any) => {
            this.eventService.events = data;
            this.subscription.unsubscribe();
          }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
        });
      }

    })
  }
  
}
