import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contests } from 'src/app/contests/models/Contest';

@Component({
  selector: 'app-contests-details',
  templateUrl: './contests-details.component.html',
  styleUrls: ['./contests-details.component.scss']
})
export class ContestsDetailsComponent implements OnInit {

  @Input() contest: Contests;
  contestsFG: FormGroup;
  private subscription: Subscription;
  private subscription2: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  loading = false;
  contestImages = [];
  oldContestImages = [];
  contestVideo = undefined;
  url="https://intelitur.sytes.net/files/";
  imageIndex = 0;

  constructor() {
    this.contestsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
  }

}
