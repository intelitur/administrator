import { Component } from "@angular/core";
import { UserService } from "./users/services/user.service";
import { AuthService } from "./general-services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public sessionService: UserService, public _auth: AuthService) {}
  title = "AdministratorModule";

  ngOnInit(): void {}
}
