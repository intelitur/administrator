import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-root",
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ServiceRootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
