import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
  @Input() uploader: { queue: any[]; };
  @Output() selectedImages = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  prepareFiles() {
    this.selectedImages.emit(this.uploader.queue.map(e => e.file));
  }

}
