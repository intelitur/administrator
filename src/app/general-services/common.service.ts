import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public snackBar: MatSnackBar,
    public http: HttpClient
  ) { }

  /**
   * @Function Open Snackbar
   * @param msg
   * @param action
   */
  openSnackBar(msg:string, action: string){
    this.snackBar.open(msg,action, {
      duration: 3000,
    });
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // Error del lado del cliente
      console.log("An error occurred:", err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // Error del lado del backend
      console.log(
        `Backend returned code ${err.status}, body was: ${JSON.stringify(
          err.error
        )}`
      );
    }
  }


  getImage(name: string){
    return this.http.get(`${environment.IMAGES_URL_BASE}/files/images/${name}`).subscribe({
      next: (data: any) =>{
        console.log(data)
      }
    })
  }

  uploadFile(file: File){
    console.log(file)
    return this.http.post(`${environment.IMAGES_URL_BASE}/image`, file, { headers: {"content-type": "multipart/form-data; boundary=---011000010111000001101001" }})
    .subscribe({
      next: (data: any) =>{
        console.log(data)
      }
    })
  }

  deleteImage(name: string){
    console.log(name)
    return this.http.delete(`${environment.IMAGES_URL_BASE}/image/${name}`).subscribe({
      next: (data: any) => {
        console.log(data)
      }
    })
  }

}
