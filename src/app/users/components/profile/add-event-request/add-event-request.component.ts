import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatDialogRef, MatAutocompleteSelectedEvent, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { EventService } from 'src/app/event/services/event.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/services/category.service';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ColorEvent } from 'ngx-color';
import { EventType } from 'src/app/event/models/Event';
import { Marker, tileLayer, latLng, Map, Icon } from 'leaflet';
import { User } from 'src/app/users/models/User.class';
import { UserService } from 'src/app/users/services/user.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';

@Component({
  selector: 'app-add-event-request',
  templateUrl: './add-event-request.component.html',
  styleUrls: ['./add-event-request.component.scss']
})
export class AddEventRequestComponent implements OnInit, AfterViewInit {

  user: User;
  petition:boolean = false;
  showInfo: boolean = false;
  eventFG: FormGroup
  allDay: boolean = false;
  loading: boolean = false;
  color: string ="";
  initial_date: any = undefined;
  final_date: any = undefined;
  today: any = new Date();
  initial_time: any = undefined;
  final_time: any =  undefined;
  common_date: any = undefined;
  subscription: Subscription
  subscription2: Subscription
  subscription3: Subscription
  subscription4: Subscription
  eventImages = [];
  eventImagesFinal = [];
  imageIndex = 0;
  //chipList
  visible;
  selectable;
  removable;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategories: any;
  allCategories: Array<any> = [];
  filteredCompanies: any;
  allCompanies: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  
  myEvent: EventType = {
    name: null,
    address: null,
    detail: null,
    color: null,
    date_range: {
        initial_date: null,
        final_date: null
    },
    cost: null,
    all_day: null,
    initial_time: null,
    final_time: null,
    user_id: null,
    images: null
  }
  map: Map
  refreshed = false

  locationMarker: Marker = new Marker(
    latLng(10.471868647924616, -84.64508235454561)
    , {
      draggable: true,
      icon: new Icon({
        iconUrl: 'assets/marker-icon.png',
        iconSize: [24, 41],
        iconAnchor: [12, 41],
        shadowUrl: 'assets/marker-shadow.png'
      })
    })

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "..."
      })
    ],
    zoom: 16,
    center: latLng(10.471691479992346, -84.64503407478333)
  };


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEventRequestComponent>,
    public commonService: CommonService,
    public eventService: EventService,
    public router: Router,
    public categoryService: CategoryService,
    public companyService: CompanyService,
    public userService: UserService,
    public multimediaService: MultimediaService
  ) { 
    this.refreshMap = this.refreshMap.bind(this)
  }

  ngOnInit() {
    this.eventFG = new FormGroup({
      name: new FormControl({value: '', disabled: this.data.action}, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      address: new FormControl({value: '', disabled: this.data.action}, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      detail: new FormControl({value: '', disabled: this.data.action}, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ._-]")]),
      cost: new FormControl({value: '', disabled: this.data.action}, [Validators.required, Validators.pattern("^([0-9]{1,}[.]{0,1}[0-9]{1,})*$")]),
      categories: new FormControl({value: '', disabled: this.data.action}),
      companies: new FormControl({value: '', disabled: this.data.action})
    });

    this.data.action? this.selectable = false: this.selectable = true;
    this.data.action? this.removable = false : this.removable = true ;
    this.data.action? this.visible = false : this.visible = true;
    
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
    this.user = this.userService.actualUser
    this.showInfo = this.data.action 
    this.petition = this.data.petition;
    this.showInfo? this.setData(this.data.event) : null;
    this.showInfo? this.myEvent.latitude = this.data.event.latitude : null;
    this.showInfo? this.myEvent.longitude = this.data.event.longitude : null;

  }

  ngAfterViewInit() {
    if(document.getElementById("mat-tab-label-0-2")){
      (document.getElementById("mat-tab-label-0-2") as any).parameters = { map: this.map, event: this.myEvent }
      document.getElementById("mat-tab-label-0-2").addEventListener("click", this.refreshMap, false);
    }
    setTimeout(() => this.map.invalidateSize(), 2000);
  }


  onMapReady(map: Map) {
    this.map = map;
    map.addLayer(this.locationMarker)


    if (this.myEvent.latitude && this.myEvent.longitude) {
      this.locationMarker.setLatLng(latLng(this.myEvent.latitude, this.myEvent.longitude))
    }
  }

  refreshMap(){
    this.map.invalidateSize()
    if(!this.refreshed){
      this.refreshed = true
      if(this.myEvent.latitude && this.myEvent.longitude)
        this.map.flyTo(latLng(this.myEvent.latitude, this.myEvent.longitude), 18)
    }
  }

  putLocationMarker(event: any) {
    this.locationMarker.setLatLng(event.latlng);
  }

  setData(event){
    this.eventFG.controls['name'].setValue(event.name)
    this.eventFG.controls['address'].setValue(event.address)
    this.eventFG.controls['detail'].setValue(event.detail)
    this.eventFG.controls['cost'].setValue(event.cost)

    this.allDay = event.all_day
    this.color = event.color
    this.initial_date = new Date(event.date_range.initial_date)
    this.final_date = new Date(event.date_range.final_date)
    this.initial_time = event.initial_time
    this.final_time = event.final_time
    this.allDay?  this.common_date = event.date_range.initial_date : this.common_date = undefined; 

    //categorias
    if(!this.petition){
      this.subscription3 = this.categoryService.getEventCategories(event.event_id).subscribe({
        next: (data: any) => {
          this.allCategories = []
          data.forEach(val => this.allCategories.push(val));
          this.subscription3.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
      //compañías
      this.subscription4 = this.companyService.getCompaniesByEvent(event.event_id).subscribe({
        next: (data: any) => {
          this.allCompanies = []
          data.forEach(val => this.allCompanies.push(val));
          this.subscription4.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
    }
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
    
    let urlImages = await this.uploadFiles()

    this.myEvent.name = this.eventFG.controls['name'].value;
    this.myEvent.cost = this.eventFG.controls['cost'].value;
    this.myEvent.address = this.eventFG.controls['address'].value;
    this.myEvent.detail = this.eventFG.controls['detail'].value;
    this.myEvent.all_day = this.allDay;
    this.myEvent.color =  this.color;
    this.myEvent.date_range = {
      initial_date: this.initial_date,
      final_date: this.final_date
    }
    this.myEvent.initial_time = this.initial_time,
    this.myEvent.final_time = this.final_time,
    this.myEvent.latitude = this.locationMarker.getLatLng().lat,
    this.myEvent.longitude = this.locationMarker.getLatLng().lng
    this.myEvent.user_id = this.user.user_id;
    this.myEvent.images = urlImages
    this.createRequest(this.myEvent);
  }

  createRequest(event: EventType){
    
    this.eventService.createEvent(event, true).subscribe({
      next: async (data: any) => {
        console.log(data)
        if (data.status == 201) {

          /**Añadiendo compañías y categorías al evento */
          this.getCategories()
          this.getCompanies()
          await this.eventRelations(data.body[0])
          /**Añadiendo las imágenes al evento*/
          await this.addImagesToEvent(data.body[0])
          this.commonService.openSnackBar(
            `La petición del evento ${this.eventFG.value.name} se ha creado`,
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
    if(!this.eventFG.valid || (this.allDay == false && this.initial_date == undefined) || this.color == ""  ||
    (this.allDay == false && this.final_date== undefined) || (this.allDay == true && this.initial_time == undefined) || 
    (this.allDay == true && this.final_time == undefined ) || (this.allDay == true && this.common_date == undefined) || 
    this.allCategories.length === 0 || (this.allDay == true && this.initial_time >= this.final_time) ||
    this.loading == true || (this.allDay == false && this.initial_date > this.final_date) || this.eventImages.length == 0) {
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
      await this.eventService.addCompanyToEvent(this.allCompanies[i], event_id, this.user.user_id).toPromise()
    }
    

    //Categorias
    
    for(let i=0; i<this.allCategories.length; i++){
      await this.eventService.addCategoryToEvent(this.allCategories[i], event_id).toPromise()
    }
    
  }

  getFiles(event: any){
    if(event.target.files){
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
