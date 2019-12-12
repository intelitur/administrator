import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
  @Output() selectedImages = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  prepareFiles(event: FileList) {
    this.selectedImages.emit(event);
  }

}
