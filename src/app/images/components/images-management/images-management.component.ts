import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';
import { environment } from 'src/environments/environment';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-images-management',
  templateUrl: './images-management.component.html',
  styleUrls: ['./images-management.component.scss']
})
export class ImagesManagementComponent implements OnInit {

  url= environment.IMAGES_URL_BASE;
  imageIndex = 0;
  loading: boolean = false;
  subscription: Subscription

  constructor(
    public imageService: ImagesService,
    public commonService: CommonService,
    public multimediaService: MultimediaService
  ) { }

  ngOnInit() {
    this.subscription = this.imageService.getTouristViewImages().subscribe({
      next: (data: any) => {
        this.imageService.images = data
        data.forEach(element => this.imageService.currentImages.push(element));
        this.subscription.unsubscribe()
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`,"OK") 
    })
  }

  onSlide(event){
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  async uploadFile(files: FileList){
    console.log("efewfwef")
    this.loading = true;
    let images = [];
    for(let i=0; i<files.length; i++){
          await this.commonService.uploadFile(files[i]).then((data: any) => {
          images.push(data.filename)
        }
      )
    }
    this.imageService.images.length != 0? images = images.concat(this.imageService.images): null;
    this.updateImages(images);
  }

  async deleteImage(){
    this.loading = true;
    if(this.imageService.images.length == 1){
      this.imageIndex = 0;
    }

    await this.multimediaService.deleteImage(this.imageService.images[this.imageIndex].image_id).toPromise().then(
      (data: any) => {
        if(data.status == 204){
          this.commonService.openSnackBar(
            `La imagen se ha eleminado`,
            "OK"
          );
        }
      }
    )
    this.imageService.images.splice(this.imageIndex, 1)
    this.loading = false
  }

  async updateImages(images) {
    for(let i=0; i<images.length; i++){
      if(this.imageService.currentImages.indexOf(images[i]) === -1){
        await this.multimediaService.addImage(0, 1, images[i]).toPromise()
      }
    }

    this.multimediaService.getImages(0, 1).subscribe({
      next: (data: any) => {
        this.imageService.images = data
        data.forEach(element => {this.imageService.currentImages.push(element)})
      }
    })
    this.loading = false;
  }

}
