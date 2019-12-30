import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DialogManagerService } from "src/app/general-services/dialog-manager.service";

@Component({
  selector: "app-itinerary-distribution",
  templateUrl: "./itinerary-distribution.component.html",
  styleUrls: ["./itinerary-distribution.component.scss"]
})
export class ItineraryDistributionComponent implements OnInit {
  @Input() it: any;
  ngOnInit(): void {
  }
}
