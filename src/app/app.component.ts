import { Component } from '@angular/core';
import { SessionService } from './general-services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public sessionService: SessionService
  ){}
  title = 'AdministratorModule';

  ngOnInit(): void {

  }
}
