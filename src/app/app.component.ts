import { Component } from '@angular/core';
import { SessionService } from './general-services/session.service';
import { AuthService } from './general-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public _auth: AuthService
  ){}
  title = 'AdministratorModule';

  ngOnInit(): void {

  }
}
