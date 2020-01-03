import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-day-details',
  templateUrl: './show-day-details.component.html',
  styleUrls: ['./show-day-details.component.scss']
})
export class ShowDayDetailsComponent implements OnInit {

  constructor(
    @Optional() public dialogRef: MatDialogRef<ShowDayDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public details: string
  ) { }

  ngOnInit() {
  }

}
