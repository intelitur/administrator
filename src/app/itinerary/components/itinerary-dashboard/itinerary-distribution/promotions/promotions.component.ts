import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  constructor(public commonService: CommonService) { }

  promotions = ["Promotion1", "Promotion2", "Promotion 3","Promotion 1", "Promotion 2", "car"];
  addedPromotions = [];
  filter: string;
  ngOnInit() {

  }
}

