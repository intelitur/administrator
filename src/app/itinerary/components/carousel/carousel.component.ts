import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() data: any;
  @Output() deletedImage = new EventEmitter();
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = this.data.local ? '' : environment.IMAGES_URL_BASE;
  }

  deleteImage(index: number) {
    this.data.images.splice(index, 1);
    this.deletedImage.emit(index);
  }
}
