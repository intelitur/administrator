import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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
}
