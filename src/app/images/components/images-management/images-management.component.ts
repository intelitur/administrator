import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { MultimediaService } from "src/app/general-services/multimedia.service";
import { environment } from "src/environments/environment";
import { ImagesService } from "../../services/images.service";

@Component({
  selector: "app-images-management",
  templateUrl: "./images-management.component.html",
  styleUrls: ["./images-management.component.scss"],
})
export class ImagesManagementComponent implements OnInit {
  url = environment.IMAGES_URL_BASE;
  imageIndex = 0;
  currentImg;
  loading: boolean = false;
  subscription: Subscription;

  filter = {
    showed: "0",
  };

  constructor(
    public imageService: ImagesService,
    public commonService: CommonService,
    public multimediaService: MultimediaService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  onSlide(event) {
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    this.currentImg = this.imageService.images[this.imageIndex];
  }

  refresh() {
    this.loading = true;
    let showed: any = Number(this.filter.showed);
    showed == 0
      ? (showed = undefined)
      : showed == 1
      ? (showed = true)
      : (showed = false);

    this.subscription = this.imageService
      .getTouristViewImages(showed)
      .subscribe({
        next: (data: any) => {
          this.imageService.images = data;
          data != [] ? (this.currentImg = data[0]) : null;
          this.subscription.unsubscribe();
          this.loading = false;
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }

  async uploadFile(files: FileList) {
    this.loading = true;
    let images = [];
    for (let i = 0; i < files.length; i++) {
      await this.commonService.uploadFile(files[i]).then((data: any) => {
        images.push(data.filename);
      });
    }
    this.updateImages(images);
  }

  async updateImages(images) {
    for (let i = 0; i < images.length; i++) {
      await this.imageService.addImageToTouristView(images[i]).toPromise();
    }
    this.commonService.openSnackBar("Se han añadido las imágenes", "OK");
    this.refresh();
  }

  changeImgShowState() {
    let id = this.currentImg.home_image_id;
    this.imageService.changeShowState(id, !this.currentImg.showed).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.currentImg.showed = !this.currentImg.showed;
          this.currentImg.showed
            ? this.commonService.openSnackBar(
                "Se ha cambiado la imagen para mostrarla",
                "OK"
              )
            : this.commonService.openSnackBar(
                "Se ha cambiado la imagen para no mostrarla",
                "OK"
              );
        }
      },
      error: (err: HttpErrorResponse) =>
        this.commonService.openSnackBar(`Error: ${err}`, "OK"),
    });
  }

  async deleteImage() {
    this.loading = true;
    let id = this.currentImg.home_image_id;

    await this.imageService
      .disableImg(id)
      .toPromise()
      .then((data: any) => {
        if (data.status == 204) {
          this.commonService.openSnackBar(`La imagen se ha eleminado`, "OK");
          this.imageService.images.splice(this.imageIndex, 1);
        } else {
          this.commonService.openSnackBar(
            "Error al intentar eliminar la imagen",
            "OK"
          );
        }
      });

    this.loading = false;
  }
}
