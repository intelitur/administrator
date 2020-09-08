import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-offer-root",
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OfferRootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
