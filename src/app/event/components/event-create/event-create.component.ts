import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from '../../services/event.service';
import { ColorEvent } from 'ngx-color';
import { EventType } from '../../models/Event';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { Category } from 'src/app/itinerary/models/Category';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CompanyService } from 'src/app/company/services/company.service';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/app/users/models/User.class';
import { MultimediaService } from 'src/app/general-services/multimedia.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  user: User
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
  imageIndex = 0;
  subscription: Subscription
  subscription2: Subscription
  eventImages = [];
  eventImagesFinal = [];
  //chipList
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategories: any;
  allCategories: Array<any> = [];
  filteredCompanies: any;
  allCompanies: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  
  constructor(
    public dialogRef: MatDialogRef<EventCreateComponent>,
    public commonService: CommonService,
    public eventService: EventService,
    public router: Router,
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
      companies: new FormControl(null),
    });
    
    this.user = this.userService.actualUser

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

  async onSubmit(){
    this.loading = true;
    this.eventFG.disable();

    this.allDay == true? (this.initial_date=this.common_date , this.final_date=this.common_date) : null; 
    this.initial_time == undefined? this.initial_time = null: null;
    this.final_time == undefined? this.final_time = null: null;

    let event: EventType = {
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
      user_id: this.userService.actualUser.user_id
    }
    this.createEvent(event);
  }

  createEvent(event: EventType){
    this.eventService.createEvent(event).subscribe({
      next: async (data: any) => {
        console.log(data)
        if (data.status == 201) {
          
          /**Añadiendo compañías y categorías al evento */
          this.getCategories()
          this.getCompanies()
          await this.eventRelations(data.body[0])
          /**Añadiendo imagenes */
          await this.addImagesToEvent(data.body[0])
          this.commonService.openSnackBar(
            `El evento ${this.eventFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate(['/event', data.body[0]])
        } else {
          this.commonService.openSnackBar(
            `Error al crear el evento: ${data.error}`,
            "OK"
          );
          this.loading = false;
          this.eventFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.eventFG.enable()
      }
    });
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
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
    (this.allDay == true && this.final_time == undefined ) || (this.allDay == true && this.common_date == undefined) || 
    (this.initial_time >= this.final_time) || this.eventImages.length == 0  || this.loading == true ) {
      return true
    }
    return false
  }

  //chipList 
  removeCategory(category: string): void {
    let index = this.allCategories.indexOf(category)
    if (index >= 0) {
      this.allCategories.splice(index, 1);
    }
  }

  /**
   * Añade el tag seleccionado a la lista para mostarlo y lo guarda
   * @param event 
   */
  selectedCategory(event: MatAutocompleteSelectedEvent): void {
    let index = this.allCategories.indexOf(event.option.value);
    if (index < 0) {
      this.allCategories.push(event.option.value)
      this.eventFG.controls['categories'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La categoría ya ha sido agregada!",
        "OK"
      );
    }
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
    let index = this.allCompanies.indexOf(event.option.value);
    if (index < 0) {
      this.allCompanies.push(event.option.value)
      this.eventFG.controls['companies'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La compañía ya ha sido agregada!",
        "OK"
      );
    }
  }

  /**
   * Metodo para obtener únicamente los ids de los tags que se guardaron 
   */
  getCategories() {
    let categoryIDs: Array<any> = [];
    for (let i = 0; i < this.allCategories.length; i++) {
      categoryIDs.push(this.allCategories[i].category_id)
    }
    this.allCategories = categoryIDs;
  }

  /**
   * Metodo para obtener únicamente los ids de los tags que se guardaron 
   */
  getCompanies() {
    let companyIDs: Array<any> = [];
    for (let i = 0; i < this.allCompanies.length; i++) {
      companyIDs.push(this.allCompanies[i].company_id)
    }
    this.allCompanies = companyIDs;
  }

  async eventRelations(event_id){
    //compañías
    for(let i=0; i<this.allCompanies.length; i++){
      await this.eventService.addCompanyToEvent(this.allCompanies[i], event_id,this.user.user_id).toPromise()
    }

    //Categorias
    for(let i=0; i<this.allCategories.length; i++){
      await this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise()
    }
  }

  getFiles(event: any){
    if(event.target.files){
      this.eventImages = []
      this.eventImagesFinal = []
      for(let i=0; i<event.target.files.length; i++){
        if (event.target.files[i]) {
          this.eventImagesFinal.push(event.target.files[i])

          var reader = new FileReader();
          
          reader.readAsDataURL(event.target.files[i]);

          reader.onload = (event:any) => {
            this.eventImages.push(event.target.result);
          } 
          
        }
      }
    }
  }

  async uploadFiles() {
    let images = [];
    for(let i=0; i<this.eventImagesFinal.length; i++){
          await this.commonService.uploadFile(this.eventImagesFinal[i]).then((data: any) => {
          images.push(data.filename)
        }
      )
    }
    return images
  }

  onSlide(event){
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  deleteImage(){
    if(this.eventImages.length == 1){
      this.imageIndex = 0;
    }
    this.eventImages.splice(this.imageIndex, 1);
    this.eventImagesFinal.splice(this.imageIndex, 1);
  }

  async addImagesToEvent(event_id){
    let urlImages = await this.uploadFiles()
    
    for(let i=0; i<urlImages.length; i++){
      await this.multimediaService.addImage(event_id, 1, urlImages[i]).toPromise()
    }

  }

}
