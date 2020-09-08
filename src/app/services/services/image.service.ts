import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { FileUploader } from "ng2-file-upload";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  uploader: FileUploader = new FileUploader({
    url: `${environment.SERVER_BASE_URL}image/upload`,
    itemAlias: "file"
  });
  constructor(private _http: HttpClient) {}

  saveImages(images: any) {
    for (var p of images) {
      console.log(p);
    }
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this._http.post(
      `${environment.SERVER_BASE_URL}image/upload`,
      images,
      { headers: headers }
    );
  }
}
