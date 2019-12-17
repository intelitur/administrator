import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  result = ["el"];
  promotionsDay1 = ["Promotion1", "Promotion2", "Promotion3"];
  promotionsDay2 = ["Promotion1", "Promotion2", "Promotion3"];
  promotionsDay3 = ["Promotion1", "Promotion2", "Promotion3"];
  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  /**
   * @funtion delete promotion by item and listIndicator that is 1 is list 1 and so on...
   * @param item
   * @param listIndicator
   */
  deletePromotion(item: string, listIndicator: number){
    switch(listIndicator){
      case 1: {
        this.promotionsDay1 =  this.promotionsDay1.filter(i => i !== item);
        break;
      }
      case 2: {
        this.promotionsDay2 =  this.promotionsDay2.filter(i => i !== item);
        break;
      }
      case 3: {
        this.promotionsDay3 =  this.promotionsDay3.filter(i => i !== item);
        break;
      }
    }
    this.commonService.openSnackBar(`Se ha eliminado correctamente la promoción ${item}`,"OK");
  }
}
