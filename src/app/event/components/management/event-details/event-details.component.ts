import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventType } from 'src/app/event/models/Event';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from 'src/app/event/services/event.service';
import { ColorEvent } from 'ngx-color';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/company/services/company.service';
import { User } from 'src/app/users/models/User.class';
import { UserService } from 'src/app/users/services/user.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: EventType;
  eventFG: FormGroup
  allDay: boolean = false;
  loading: boolean = false;
  color: string;
  initial_date: any = undefined;
  final_date: any = undefined;
  today: any = new Date();
  initial_time: any = undefined;
  final_time: any =  undefined;
  common_date: any = undefined;
  currentRate:any = 0;
  subscription: Subscription
  subscription2: Subscription
  subscription3: Subscription
  subscription4: Subscription
  eventImages = [];
  oldEventImages = [];
  url= environment.IMAGES_URL_BASE;
  imageIndex = 0;
  user: User;


  //chipList
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategories: any = [];
  allCategories: Array<any> = [];
  filteredCompanies: any = [];
  allCompanies: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;


  allOldCategories: Array<any> = [];
  allOldCompanies: Array<any> = [];

  constructor(
    public commonService: CommonService,
    public eventService: EventService,
    public categoryService: CategoryService,
    public companyService: CompanyService,
    public userService: UserService,
    public multimediaService: MultimediaService
  ) { }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      address: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      detail: new FormControl(null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      cost: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
      categories: new FormControl(null),
      companies: new FormControl(null) 
    });

    this.subscription = this.categoryService.getAllCategories(1)
    .subscribe({
      next: (data: any) => {
        this.filteredCategories = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });

    this.subscription2 = this.companyService.getCompanies()
    .subscribe({
      next: (data: any) => {
        this.filteredCompanies = data;
        this.subscription2.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
    console.log(this.event)
    this.user = this.userService.actualUser
    this.event.images  != undefined? this.eventImages = this.event.images : this.eventImages = []
    this.event.images  != undefined? this.event.images.forEach(val => this.oldEventImages.push(val)) : null
    this.setData();
  }

  /**
   * Toogle
   * @param param0 
   */
  changeState({source}: any){
    this.allDay == false ? this.allDay=true : this.allDay=false;
    source.checked = this.allDay;
  }

  /**
   * Color picker
   * @param event 
   */
  changeComplete(event: ColorEvent){
    this.color = event.color.hex;
  }

  /**
   * Metodo para flitar que la fecha final sea mayor o igual a la de inicio
   */
  dateFilter = (date: Date): boolean => {
    return date >= this.initial_date
  }

  disableDialog(): boolean {
    if(!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || this.color == undefined  ||
    (this.allDay == false && this.final_date== undefined) || (this.allDay == true && this.initial_time == undefined) || 
    (this.allDay == true && this.final_time == undefined ) || (this.allDay == true && this.common_date == undefined) 
    || (this.allDay == true && (this.initial_time >= this.final_time)) || this.loading == true ) {
      return true
    }
    return false
  }

  setData(){
    this.eventFG.controls['name'].setValue(this.event.name)
    this.eventFG.controls['cost'].setValue(this.event.cost)
    this.eventFG.controls['address'].setValue(this.event.address)
    this.eventFG.controls['detail'].setValue(this.event.detail)
    this.allDay = this.event.all_day
    this.color = this.event.color
    this.currentRate = this.event.score
    this.initial_date = new Date(this.event.date_range.initial_date)
    this.final_date = new Date(this.event.date_range.final_date)
    this.initial_time = this.event.initial_time
    this.final_time = this.event.final_time
    this.allDay?  this.common_date = this.event.date_range.initial_date : this.common_date = undefined; 
    //categorias
    this.subscription3 = this.categoryService.getEventCategories(this.event.event_id).subscribe({
      next: (data: any) => {
        this.allCategories = []
        this.allOldCategories = []
        data.forEach(val => this.allCategories.push(val));
        this.allCategories.forEach(val => this.allOldCategories.push(val.category_id));
        this.subscription3.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
    //compañías
    this.subscription4 = this.companyService.getCompaniesByEvent(this.event.event_id).subscribe({
      next: (data: any) => {
        this.allCompanies = []
        this.allOldCompanies = []
        data.forEach(val => this.allCompanies.push(val));
        this.allCompanies.forEach(val => this.allOldCompanies.push(val.company_id));
        this.subscription4.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
    
  }

  //chipList 
  remove(category: string): void {
    let index = this.allCategories.indexOf(category)
    if (index >= 0) {
      this.allCategories.splice(index, 1);
    }
  }

  /**
   * Añade el tag seleccionado a la lista para mostarlo y lo guarda
   * @param event 
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    
    for(let i=0; i<this.allCategories.length; i++){
      if(this.allCategories[i].category_id === event.option.value.category_id){
        this.commonService.openSnackBar(
          "¡La categoría ya ha sido agregada!",
          "OK"
        );
        return
      }
    }
    this.allCategories.push(event.option.value)
    this.eventFG.controls['categories'].setValue(null);
  }

  removeCompany(company: string): void {
    let index = this.allCompanies.indexOf(company)
    if (index >= 0) {
      this.allCompanies.splice(index, 1);
    }
  }

  /**
   * Añade el tag seleccionado a la lista para mostarlo y lo guarda
   * @param event 
   */
  selectedCompany(event: MatAutocompleteSelectedEvent): void {

    for(let i=0; i<this.allCompanies.length; i++){
      if(this.allCompanies[i].company_id === event.option.value.company_id){
        this.commonService.openSnackBar(
          "¡La compañía ya ha sido agregada!",
          "OK"
        );
        return
      }
    }
    this.allCompanies.push(event.option.value)
    this.eventFG.controls['companies'].setValue(null);
  }

  modifyEvent(){

    this.loading = true;
    this.eventFG.disable()

    this.allDay == true? (this.initial_date=this.common_date , this.final_date=this.common_date) : null; 
    this.initial_time == undefined? this.initial_time = null: null;
    this.final_time == undefined? this.final_time = null: null;

    let allCategories = this.getCategoriesID();
    let allCompanies = this.getCompaniesID();

    let event: EventType = {
      event_id: this.event.event_id,
      name: this.eventFG.controls['name'].value,
      cost: this.eventFG.controls['cost'].value,
      address: this.eventFG.controls['address'].value,
      detail: this.eventFG.controls['detail'].value,
      all_day: this.allDay,
      color:  this.color,
      date_range: {
        initial_date: this.initial_date,
        final_date: this.final_date
      },
      initial_time: this.initial_time,
      final_time: this.final_time,
      user_id: this.user.user_id,
      is_active: this.event.is_active,
      images: this.event.images
    }
     
    let json = {
      "info": event,
      "latitude": this.event.latitude,
      "longitude": this.event.longitude
    } 

    this.eventService.modifyEvent(json).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          this.eventFG.enable()
          this.event= event;

          await this.eventRelations(allCategories, allCompanies, this.event.event_id);

          this.commonService.openSnackBar(`El evento ${this.event.name} ha sido cambiado`,"OK")
          this.loading = false;
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }

      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.eventFG.enable()
      }
    })
  }

  changeEventState(event: EventType, {source}: any){
  
    if (event.is_active) {
      this.commonService
        .confirmationDialog(`¿Desea eliminar el evento: ${event.name}?`)
        .then(async (result) => {
          if (result) {
            this.eventService.changeEventState(event.event_id).subscribe({
              next: (data: any) => {
                if (data.status == 201) {
                  event.is_active = !event.is_active;
                  source.checked = event.is_active
                  this.commonService.openSnackBar(
                    `El evento ${event.name} ha sido eliminado`,
                    "OK"
                  );
                } else {
                  this.commonService.openSnackBar(
                    `Error al cambiar el estado: ${data.error}`,
                    "OK"
                  );
                }
              },
              error: (err: HttpErrorResponse) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
                source.checked = event.is_active
              }
            });
          }else{
            source.checked = event.is_active
          }
        });
    }else{
      this.commonService.openSnackBar("No se puede reactivar un evento", "OK");
      source.checked = event.is_active
    }
  }

  /**
   * Metodo para obtener únicamente los ids de las categorías que se seleccionaron 
   */
  getCategoriesID() {
    let categoryIDs: Array<any> = [];
    for (let i = 0; i < this.allCategories.length; i++) {
      categoryIDs.push(this.allCategories[i].category_id)
    }
    return categoryIDs;
  }

  /**
   * Metodo para obtener únicamente los ids de los compañías que se seleccionaron
   */
  getCompaniesID() {
    let companyIDs: Array<any> = [];
    for (let i = 0; i < this.allCompanies.length; i++) {
      companyIDs.push(this.allCompanies[i].company_id)
    }
    return companyIDs;
  }

  async eventRelations(allCategories, allCompanies, event_id){
    for(let i=0; i<allCategories.length; i++){
      if(this.allOldCategories.indexOf(allCategories[i]) === -1){
        await this.eventService.addCategoryToEvent(allCategories[i], event_id).toPromise()
      }
    }

    for(let i=0; i<this.allOldCategories.length; i++){
      if(allCategories.indexOf(this.allOldCategories[i]) === -1){
        await this.categoryService.deleteCategoryFromEvent(this.allOldCategories[i], event_id).toPromise()
      }
    }

    for(let i=0; i<allCompanies.length; i++){
      if(this.allOldCompanies.indexOf(allCompanies[i]) === -1){
        await this.eventService.addCompanyToEvent(allCompanies[i], event_id, this.user.user_id).toPromise()
      }
    }

    for(let i=0; i<this.allOldCompanies.length; i++){
      if(allCompanies.indexOf(this.allOldCompanies[i]) === -1){
        await this.eventService.deleteCompanyFromEvent(this.allOldCompanies[i], event_id).toPromise()
      }
    }
    this.allOldCategories = allCategories;
    this.allOldCompanies = allCompanies;
  }


  //Metodos de imagenes
  onSlide(event){
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  async uploadFile(files: FileList){
    this.loading = true;
    this.eventFG.disable()
    let images = [];
    for(let i=0; i<files.length; i++){
          await this.commonService.uploadFile(files[i]).then((data: any) => {
          images.push(data.filename)
        }
      )
    }
    this.eventImages.length != 0? images = images.concat(this.eventImages): null;
    this.updateImages(images);
  }

  async deleteImage(){
    this.loading = true;
    this.eventFG.disable()
    if(this.eventImages.length == 1){
      this.imageIndex = 0;
    }

    await this.multimediaService.deleteImage(this.eventImages[this.imageIndex].image_id).toPromise().then(
      (data: any) => {
        if(data.status == 204){
          this.commonService.openSnackBar(
            `La imagen se ha eleminado`,
            "OK"
          );
        }
      }
    )
    this.eventImages.splice(this.imageIndex, 1)
    this.loading = false
    this.eventFG.enable()
  }

  async updateImages(images) {
    for(let i=0; i<images.length; i++){
      if(this.oldEventImages.indexOf(images[i]) === -1){
        await this.multimediaService.addImage(this.event.event_id, 1, images[i]).toPromise()
      }
    }

    this.multimediaService.getImages(this.event.event_id, 1).subscribe({
      next: (data: any) => {
        this.eventImages = data
        data.forEach(element => {this.oldEventImages.push(element)})
      }
    })
    this.eventFG.enable()
    this.loading = false;
  }
}