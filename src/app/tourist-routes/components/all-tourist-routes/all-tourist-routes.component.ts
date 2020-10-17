import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { TouristRoutesService } from '../../services/tourist-routes.service';
import { CreateTouristRoutesComponent } from '../create-tourist-routes/create-tourist-routes.component';

@Component({
  selector: 'app-all-tourist-routes',
  templateUrl: './all-tourist-routes.component.html',
  styleUrls: ['./all-tourist-routes.component.scss']
})
export class AllTouristRoutesComponent implements OnInit {

  filter: any = {
    name: ""
  };

  constructor(
    public turistRoutesService: TouristRoutesService,
    public commonService: CommonService,
    public dialogService: MatDialog,
  ) { }

  ngOnInit() {
  }

  openCreateDialog(){
    this.dialogService.open(CreateTouristRoutesComponent, {width: "70%", height:"90%", minWidth: "280px", disableClose: true})
  }
}
