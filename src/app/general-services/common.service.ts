import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  /**
   * @Function Open Snackbar
   * @param msj
   * @param action
   */
  openSnackBar(msj:string, action: string){
    this.snackBar.open(msj,action, {
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
}
