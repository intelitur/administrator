import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Contests } from 'src/app/contests/models/contest';
import { CommonService } from 'src/app/general-services/common.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';

@Component({
  selector: 'app-contests-multimedia',
  templateUrl: './contests-multimedia.component.html',
  styleUrls: ['./contests-multimedia.component.scss']
})
export class ContestsMultimediaComponent implements OnInit {
  
  @Input() contest: Contests;
  loading = false;
  contestImages: any = [];
  contestVideos: any = [];
  url="https://intelitur.sytes.net/files/";
  imageIndex = 0;
  videoIndex = 0;

  constructor(
    public commonService: CommonService,
    public multimediaService: MultimediaService
  ) { }

  ngOnInit() {
  }

  //Metodos de imagenes
  onSlideI(event){
    this.imageIndex = parseInt(event.current.replace("slideId1_", ""), 10);
  }

  onSlideV(event){
    this.videoIndex = parseInt(event.current.replace("slideId2_", ""), 10);
  }

  async uploadFiles(files: FileList, type: Number){
    this.loading = true;
    let myFiles = [];
    
    for(let i=0; i<files.length; i++){
          await this.commonService.uploadFile(files[i]).then((data: any) => {
          myFiles.push(data.filename)
        }
      )
    }

    this.updateFiles(myFiles, type);
    
  }

  async deleteFile(type: Number){
    this.loading = true;
    
    if(type == 0){
      this.contestImages.length == 1? this.imageIndex = 0 : null;
    }else{
      this.contestVideos.length == 1? this.videoIndex = 0 : null;
    }
    
    let index; 
    let msg;
    type == 0? index = this.imageIndex : index = this.videoIndex
    type == 0? msg = "La imagen se ha elimindado" : "El video ha sido eliminado"

    await this.multimediaService.deleteImage(this.contestImages[index].image_id).toPromise().then(
      (data: any) => {
        if(data.status == 204){
          this.commonService.openSnackBar(
            msg,
            "OK"
          );
        }
      }
    )

    if(type == 0){
      this.contestImages.splice(this.imageIndex, 1)
    }else{
      this.contestVideos.splice(this.videoIndex, 1)
    }

    this.loading = false
  }

  async updateFiles(files, type: Number) {

    for(let i=0; i<files.length; i++){
      await this.multimediaService.addImage(this.contest.contest_id, 5, files[i]).toPromise()
    }

    this.multimediaService.getImages(this.contest.contest_id, 5).subscribe({
      next: (data: any) => {
        if(type == 0){
          data.forEach(element => {
            element.name.contains(".jpg") ||  element.name.contains(".png") ? this.contestImages.push(element) : null
          });
        }else{
          data.forEach(element => {
            element.name.contains(".mp4") ? this.contestVideos.push(element) : null
          });
        }
      }
    })
    
    this.loading = false;
  }

}
