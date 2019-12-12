import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionService {

  actualUser = null;

  constructor() {
    this.actualUser = JSON.parse(localStorage.getItem("actualUser"));
  }

  login(email, password){
    localStorage.setItem("actualUser",JSON.stringify("{id: 1, nombre: 'Pablo'}"));
    this.actualUser = JSON.parse(localStorage.getItem("actualUser"));
  }

  logOut(){
    localStorage.removeItem("actualUser");
    this.actualUser = null;
  }


}
