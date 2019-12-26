import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonService } from 'src/app/general-services/common.service';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Promotion } from 'src/app/itinerary/models/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  constructor(public commonService: CommonService, public itineraryService: ItineraryService) { }
  addedPromotions: Array<Promotion> = new Array();
  promotions: Array<Promotion> = new Array();
  private subscriptionPromotion: Subscription;
  private subscriptionAddedPromotion: Subscription;
  private subscription: Subscription;
  public promotionLoading: boolean = false;
  public addedPromotionLoading: boolean = false;
  filter: any = { name: '' };
  ngOnInit() {
    this.promotionLoading = true;
    this.addedPromotionLoading = true;

    this.getAllPromotions();
    this.getPromotionByItineraryID();
  }
  /**
   *@funtion Get promotions by itinerary id
   */
  getPromotionByItineraryID(){
    this.subscriptionAddedPromotion = this.itineraryService.getPromotionByItinerayID().subscribe({
      next: (data : any) => {
        this.addedPromotions = data.data.rows;
        this.addedPromotionLoading = false;
       this.subscriptionAddedPromotion.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }
  /**
   * @funtion Get all promotions
   */
  getAllPromotions(){
    this.subscriptionPromotion = this.itineraryService.getAllPromotions().subscribe({
      next: (data : any) => {
        this.promotions = data.data.rows;
        this.promotionLoading = false;
       this.subscriptionPromotion.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }
  /**
   * @funtion Add Promotion in itinerary
   * @param promotion_id
   */
  addPromotionInItinerary(promotion_id: number){
    this.addPromotionToListAddedPromotion(promotion_id);
    this.subscription = this.itineraryService.addPromotionInItinerary(promotion_id).subscribe({
      next: (data : any) => {
       this.commonService.openSnackBar("Se ha agregado la promoción correctamente","OK");
       this.subscription.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }

  /**
   * Add promotion to list added promotion
   * @param promotion_id
   */
  addPromotionToListAddedPromotion(promotion_id:number){
    let prom = this.promotions.filter(item => item.promotion_id === promotion_id)[0]; // Get promotion to add in addedPromotions
    this.promotions = this.promotions.filter(item => item.promotion_id !== promotion_id); // Filter promotions to remove added promotion
    this.addedPromotions.push(prom); // Add promotion
    this.addedPromotions = this.addedPromotions.filter(item => item); // Refresh list
  }

  /**
   * @funtion Delete promotion of itinerary
   * @param promotion_id
   */
  deletePromotionOfItinerary(promotion_id: number){
   this.returnPromotionToPromotions(promotion_id);
   this.subscription = this.itineraryService.deletePromotionOfItinerary(promotion_id).subscribe({
    next: (data : any) => {
      this.commonService.openSnackBar("Se ha eliminado la promoción correctamente","OK");
     this.subscription.unsubscribe();
    }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
  });
  }

  /**
   * Return promotion deleted to promotions
   * @param promotion_id
   */
  returnPromotionToPromotions(promotion_id:number){
    let prom = this.addedPromotions.filter(item => item.promotion_id === promotion_id)[0];
    this.addedPromotions = this.addedPromotions.filter(item => item.promotion_id !== promotion_id);
    this.promotions.push(prom);
    this.promotions = this.promotions.filter(item => item); // Refresh list
  }
}

