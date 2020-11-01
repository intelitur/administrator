import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  action: boolean;

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


  async confirmationDialog(msg: string){
    await Swal.fire({
      title: msg,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Si, continuar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true,
    }).then((result) => {
      this.action = result.value; 
    });     
    return this.action;
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
    return this.http.get(`${environment.IMAGES_URL_BASE}/files/${name}`).subscribe({
      next: (data: any) =>{
        console.log(data)
      }
    })
  }

  async uploadFile(file: File){
    console.log(file)
    let data = new FormData();
    data.append("file", file);

    let promise = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
  
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          resolve(JSON.parse(this.response));
        }
      });
  
      xhr.open("POST", `${environment.IMAGES_URL_BASE}adminfiles`);
  
      xhr.send(data);
      
    })

    return promise
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
