import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Array<any>;
  @Output() deletedImage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteImage(index: number) {
    this.images.splice(index, 1);
    this.deletedImage.emit(index);
  }
}
