import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { Ads } from '../../models/Ads';
import { AdsService } from '../../services/ads.service';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MultimediaService } from 'src/app/general-services/multimedia.service';

@Component({
  selector: 'app-ads-create',
  templateUrl: './ads-create.component.html',
  styleUrls: ['./ads-create.component.scss']
})
export class AdsCreateComponent implements OnInit {

  adsFG: FormGroup;
  private subscription: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  today: any = new Date();
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCompanies: any;
  adImages = [];
  adImagesFinal = [];
  imageIndex = 0;
  allCompanies: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    public dialogRef: MatDialogRef<AdsCreateComponent>,
    public companyService: CompanyService,
    public commonService: CommonService,
    public adsService: AdsService,
    public multimediaService: MultimediaService,
    private router: Router
  ) { 
    this.adsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      companies: new FormControl(null),
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit() {
    this.subscription = this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        this.filteredCompanies = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  onSubmit(){
    this.getCompanies()
    let initalDate = this.formatDates(this.start_Date)
    let finalDate = this.formatDates(this.end_Date)
    let ad: Ads = {
      name: this.adsFG.controls['name'].value,
      description: this.adsFG.controls['description'].value,
      active_range: {
        start: initalDate,
        end: finalDate
      }
    }
    this.createAd(ad);
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }

  createAd(ad: Ads){
    this.adsFG.disable();
    this.adsService.createAd(ad).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          await this.addAdToCompany(data.body.ad_id)
          await this.addImagesToAd(data.body.ad_id)
          this.commonService.openSnackBar(
            `El anuncio ${this.adsFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate([`/ads/${data.body.ad_id}`])
        } else {  
          this.commonService.openSnackBar(
            `Error al crear el anuncio: ${data.error}`,
            "OK"
          );
          this.adsFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.adsFG.enable()
      }
    });
  }

  formatDates(date: Date){
    if(date != undefined){
      date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 )

      let year = date.getFullYear()
      let month = (date.getMonth()+1) >= 10? (date.getMonth()+1) : "0"+(date.getMonth()+1) 
      let day = date.getDate() >= 10? date.getDate(): "0"+date.getDate()
      return year+"-"+month+"-"+day 
    }
  }

  async addAdToCompany(ad_id){
    for(let i=0; i<this.allCompanies.length; i++){
      await this.adsService.addAdToCompany(ad_id, this.allCompanies[i]).toPromise()
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
      this.adsFG.controls['companies'].setValue(null);
    } else {
      this.commonService.openSnackBar(
        "¡La compañía ya ha sido agregada!",
        "OK"
      );
    }
  }

  getCompanies() {
    let companyIDs: Array<any> = [];
    for (let i = 0; i < this.allCompanies.length; i++) {
      companyIDs.push(this.allCompanies[i].company_id)
    }
    this.allCompanies = companyIDs;
  }

  getFiles(event: any){
    this.adImages = []
    this.adImagesFinal = []
    if(event.target.files){
      for(let i=0; i<event.target.files.length; i++){
        if (event.target.files[i]) {
          this.adImagesFinal.push(event.target.files[i])

          var reader = new FileReader();
          
          reader.readAsDataURL(event.target.files[i]);

          reader.onload = (event:any) => {
            this.adImages.push(event.target.result);
          } 
          
        }
      }
    }
  }

  async uploadFiles() {
    let images = [];
    for(let i=0; i<this.adImagesFinal.length; i++){
          await this.commonService.uploadFile(this.adImagesFinal[i]).then((data: any) => {
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
    if(this.adImages.length == 1){
      this.imageIndex = 0;
    }
    this.adImages.splice(this.imageIndex, 1);
    this.adImagesFinal.splice(this.imageIndex, 1);
  }

  async addImagesToAd(event_id){
    let urlImages = await this.uploadFiles()
    
    for(let i=0; i<urlImages.length; i++){
      await this.multimediaService.addImage(event_id, 4, urlImages[i]).toPromise()
    }

  }
}
