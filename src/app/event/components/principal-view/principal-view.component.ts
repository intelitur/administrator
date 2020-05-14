import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  constructor(
    public _auth: AuthService
  ) { }

  ngOnInit() {
  }

}
