import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  images: any = [];
  module = "homeImages";

  constructor(private http: HttpClient) {}

  getTouristViewImages(showed?: boolean) {
    let show: string;

    showed != undefined ? (showed ? (show = "true") : (show = "false")) : null;

    let params: any = {
      is_active: "true",
    };

    show != undefined ? (params.showed = show) : null;

    return this.http.get(`${environment.IMAGES_URL_BASE}${this.module}`, {
      params: params,
    });
  }

  addImageToTouristView(name: string) {
    let json = {
      name: name,
      showed: false,
    };
    return this.http.post(
      `${environment.IMAGES_URL_BASE}${this.module}`,
      json,
      { observe: "response" }
    );
  }

  changeShowState(homeImgID: Number, showed: boolean) {
    let json = {
      showed: showed,
    };
    return this.http.patch(
      `${environment.IMAGES_URL_BASE}${this.module}/${homeImgID}`,
      json,
      { observe: "response" }
    );
  }

  disableImg(homeImgID: Number) {
    return this.http.delete(
      `${environment.IMAGES_URL_BASE}${this.module}/${homeImgID}`,
      { observe: "response" }
    );
  }
}
