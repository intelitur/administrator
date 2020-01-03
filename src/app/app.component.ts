import { Component } from '@angular/core';
import { UserService } from './users/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public sessionService: UserService
  ){}
  title = 'AdministratorModule';

  ngOnInit(): void {

  }
}
