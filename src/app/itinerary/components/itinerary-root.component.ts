import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-itinerary-root",
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ItineraryRootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
