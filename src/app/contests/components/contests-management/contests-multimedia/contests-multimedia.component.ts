import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Contests } from 'src/app/contests/models/Contest';
import { CommonService } from 'src/app/general-services/common.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';
import { environment } from 'src/environments/environment';

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
  url=environment.IMAGES_URL_BASE;
  imageIndex = 0;
  videoIndex = 0;

  constructor(
    public commonService: CommonService,
    public multimediaService: MultimediaService
  ) { }

  ngOnInit() {
    console.log(this.contest)
    this.sortInList(this.contest.images)
  }

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
    
    console.log(type)

    if(type == 0){
      this.contestImages.length == 1? this.imageIndex = 0 : null;
    }else{
      this.contestVideos.length == 1? this.videoIndex = 0 : null;
    }
    
    let index; 
    let msg;
    let list;
    type == 0? index = this.imageIndex : index = this.videoIndex
    type == 0? msg = "La imagen se ha elimindado" : msg =  "El video ha sido eliminado"
    type == 0? list = this.contestImages : list = this.contestVideos

    await this.multimediaService.deleteImage(list[index].image_id).toPromise().then(
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
    console.log(files)
    for(let i=0; i<files.length; i++){
      await this.multimediaService.addImage(this.contest.contest_id, 5, files[i]).toPromise()
    }

    this.multimediaService.getImages(this.contest.contest_id, 5).subscribe({
      next: (data: any) => {
        console.log(data)
        this.sortInList(data, type);
      }
    })
  }


  sortInList(data: any[], type?: Number){
    if(type == undefined){
      this.contestImages = [];
      this.contestVideos = [];
      data.forEach(element => {
        element.name.search(".jpg") != -1 ||  element.name.search(".png") != -1 ? this.contestImages.push(element) 
        :
        element.name.search(".mp4") != -1? this.contestVideos.push(element) : null
      });
    }else if(type == 0){
      this.contestImages = [];
      data.forEach(element => {
        element.name.search(".jpg") != -1 ||  element.name.search(".png") != -1 ? this.contestImages.push(element) : null
      });
    }else{
      this.contestVideos = [];
      data.forEach(element => {
        element.name.search(".mp4") != -1? this.contestVideos.push(element) : null
      });
    }
    this.loading = false;
  }


}
