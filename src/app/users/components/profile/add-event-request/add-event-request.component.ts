import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatDialogRef, MatAutocompleteSelectedEvent } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from 'src/app/event/services/event.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/services/category.service';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ColorEvent } from 'ngx-color';
import { EventType } from 'src/app/event/models/Event';

@Component({
  selector: 'app-add-event-request',
  templateUrl: './add-event-request.component.html',
  styleUrls: ['./add-event-request.component.scss']
})
export class AddEventRequestComponent implements OnInit {

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
  subscription: Subscription
  subscription2: Subscription
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
    public dialogRef: MatDialogRef<AddEventRequestComponent>,
    public commonService: CommonService,
    public eventService: EventService,
    public router: Router,
    public categoryService: CategoryService,
    public companyService: CompanyService
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

  onSubmit(){

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
    }
    this.createEvent(event);
  }

  createEvent(event: EventType){

    this.loading = true;
    this.eventFG.disable();
    this.eventService.createEvent(event).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          this.commonService.openSnackBar(
            `El evento ${this.eventFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          /**Añadiendo compañías y categorías al evento */
          this.getCategories()
          this.getCompanies()
          this.eventRelations(data.body[0])
          this.router.navigate(['/event', data.body[0]])
        } else {
          this.commonService.openSnackBar(
            `Error al crear el evento: ${data.error}`,
            "OK"
          );
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
    (this.allDay == true && this.final_time == undefined ) || (this.allDay == true && this.common_date == undefined) 
    || this.allCategories.length === 0 || (this.initial_time >= this.final_time)) {
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
      await this.eventService.addCompanyToEvent(this.allCompanies[i], event_id).toPromise()
    }

    //Categorias
    for(let i=0; i<this.allCategories.length; i++){
      await this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise()
    }
  }

}
