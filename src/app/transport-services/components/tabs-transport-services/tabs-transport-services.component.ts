import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-tabs-transport-services',
  templateUrl: './tabs-transport-services.component.html',
  styleUrls: ['./tabs-transport-services.component.scss']
})
export class TabsTransportServicesComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
