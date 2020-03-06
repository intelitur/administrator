import { Component, OnInit, Input } from '@angular/core';
import { EventType } from 'src/app/event/models/Event';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() event: EventType;
  constructor() { }

  ngOnInit() {
  }

}
