import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Ads } from "src/app/ads/models/Ads";
import { Subscription } from "rxjs";
import { CompanyService } from "src/app/company/services/company.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CommonService } from "src/app/general-services/common.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdsService } from "src/app/ads/services/ads.service";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from "@angular/material";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { DatePipe } from "@angular/common";
import { MultimediaService } from "src/app/general-services/multimedia.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-ads-details",
  templateUrl: "./ads-details.component.html",
  styleUrls: ["./ads-details.component.scss"],
})
export class AdsDetailsComponent implements OnInit {
  @Input() myAd: Ads;
  adFG: FormGroup;
  private subscription: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  loading = false;
  adImages = [];
  oldAdImages = [];
  url = environment.IMAGES_URL_BASE;
  imageIndex = 0;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCompanies: any;
  allCompanies: Array<any> = [];
  allOldCompanies: Array<any> = [];
  @ViewChild("auto", { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    public companyService: CompanyService,
    public commonService: CommonService,
    public datePipe: DatePipe,
    public adsService: AdsService,
    public multimediaService: MultimediaService
  ) {
    this.adFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      companies: new FormControl(null),
    });
  }

  ngOnInit() {
    console.log(this.myAd);
    this.subscription = this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        this.filteredCompanies = data;
        this.subscription.unsubscribe();
      },
      error: (err: HttpErrorResponse) =>
        this.commonService.openSnackBar(`Error: ${err}`, "OK"),
    });
    this.setData();
  }

  setData() {
    this.adFG.controls["name"].setValue(this.myAd.name);
    this.adFG.controls["description"].setValue(this.myAd.description);
    this.start_Date = new Date(
      this.datePipe.transform(this.myAd.active_range.start)
    );
    this.end_Date = new Date(
      this.datePipe.transform(this.myAd.active_range.end)
    );
    this.subscription2 = this.adsService
      .getCompaniesByAd(this.myAd.ad_id)
      .subscribe({
        next: (data: any) => {
          data.forEach((val) => this.allCompanies.push(val));
          this.allCompanies.forEach((val) =>
            this.allOldCompanies.push(val.company_id)
          );
          this.subscription2.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });

    this.subscription3 = this.multimediaService
      .getImages(this.myAd.ad_id, 4)
      .subscribe({
        next: (data: any) => {
          if (data != undefined) {
            data.forEach((elem) => this.adImages.push(elem));
            data.forEach((elem) => this.oldAdImages.push(elem));
          }
          this.subscription2.unsubscribe();
        },
        error: (err: HttpErrorResponse) =>
          this.commonService.openSnackBar(`Error: ${err}`, "OK"),
      });
  }

  changeState({ source }: any) {
    if (this.myAd.is_active) {
      this.commonService
        .confirmationDialog(`¿Desea eliminar el anuncio: ${this.myAd.name}?`)
        .then(async (result) => {
          if (result) {
            var id = this.myAd.ad_id;

            this.adsService.changeStateAd(id).subscribe({
              next: (data: any) => {
                if (data.status == 204) {
                  this.myAd.is_active = !this.myAd.is_active;
                  source.checked = this.myAd.is_active;
                  this.commonService.openSnackBar(
                    `El anuncio ${this.myAd.name} ha sido activado`,
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
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = this.myAd.is_active;
              },
            });
          } else {
            source.checked = this.myAd.is_active;
          }
        });
    } else {
      this.commonService.openSnackBar("No se puede reactivar un anuncio", "OK");
      source.checked = this.myAd.is_active;
    }
  }

  modifyAd() {
    this.loading = true;
    let startDate = this.formatDates(this.start_Date);
    let endDate = this.formatDates(this.end_Date);
    let allCompanies = this.getCompanies();

    this.adFG.disable();
    let ad: Ads = {
      ad_id: this.myAd.ad_id,
      name: this.adFG.controls["name"].value,
      description: this.adFG.controls["description"].value,
      active_range: {
        start: startDate,
        end: endDate,
      },
      is_active: this.myAd.is_active,
      is_up: this.myAd.is_up,
    };

    let json = {
      info: ad,
      latitude: this.myAd.latitude,
      longitude: this.myAd.longitude,
    };

    this.adsService.modifyAd(json).subscribe({
      next: async (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.adFG.enable();
          this.myAd = ad;
          this.getCompanies();
          await this.companyRelation(allCompanies, ad.ad_id);
          this.commonService.openSnackBar(
            `El anuncio ${this.myAd.name} ha sido cambiado`,
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
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.loading = false;
        this.adFG.enable();
      },
    });
  }

  removeCompany(company: string): void {
    let index = this.allCompanies.indexOf(company);
    if (index >= 0) {
      this.allCompanies.splice(index, 1);
    }
  }

  selectedCompany(event: MatAutocompleteSelectedEvent): void {
    for (let i = 0; i < this.allCompanies.length; i++) {
      if (this.allCompanies[i].company_id === event.option.value.company_id) {
        this.commonService.openSnackBar(
          "¡La compañía ya ha sido agregada!",
          "OK"
        );
        return;
      }
    }
    this.allCompanies.push(event.option.value);
    this.adFG.controls["companies"].setValue(null);
  }

  getCompanies() {
    let companyIDs: Array<any> = [];
    for (let i = 0; i < this.allCompanies.length; i++) {
      companyIDs.push(this.allCompanies[i].company_id);
    }
    return companyIDs;
  }

  formatDates(date: Date) {
    if (date != undefined) {
      date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      return year + "-" + month + "-" + day;
    }
  }

  async companyRelation(allCompanies, ad_id) {
    console.log(allCompanies);
    console.log(this.allOldCompanies);
    for (let i = 0; i < allCompanies.length; i++) {
      if (this.allOldCompanies.indexOf(allCompanies[i]) === -1) {
        await this.adsService
          .addAdToCompany(ad_id, allCompanies[i])
          .toPromise();
      }
    }

    for (let i = 0; i < this.allOldCompanies.length; i++) {
      if (allCompanies.indexOf(this.allOldCompanies[i]) === -1) {
        await this.adsService
          .deleteAdFromCompany(this.allOldCompanies[i], ad_id)
          .toPromise();
      }
    }

    this.allOldCompanies = allCompanies;
  }

  //Imagenes
  onSlide(event) {
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  async uploadFile(files: FileList) {
    this.loading = true;
    this.adFG.disable();
    let images = [];
    for (let i = 0; i < files.length; i++) {
      await this.commonService.uploadFile(files[i]).then((data: any) => {
        images.push(data.filename);
      });
    }
    this.adImages.length != 0 ? (images = images.concat(this.adImages)) : null;
    this.updateImages(images);
  }

  async deleteImage() {
    this.loading = true;
    this.adFG.disable();
    if (this.adImages.length == 1) {
      this.imageIndex = 0;
    }

    await this.multimediaService
      .deleteImage(this.adImages[this.imageIndex].image_id)
      .toPromise()
      .then((data: any) => {
        if (data.status == 204) {
          this.commonService.openSnackBar(`La imagen se ha eleminado`, "OK");
        }
      });
    this.adImages.splice(this.imageIndex, 1);
    this.loading = false;
    this.adFG.enable();
  }

  async updateImages(images) {
    for (let i = 0; i < images.length; i++) {
      if (this.oldAdImages.indexOf(images[i]) === -1) {
        await this.multimediaService
          .addImage(this.myAd.ad_id, 4, images[i])
          .toPromise();
      }
    }

    this.multimediaService.getImages(this.myAd.ad_id, 4).subscribe({
      next: (data: any) => {
        this.adImages = data;
        this.commonService.openSnackBar("Se han agregado las imágenes", "OK");
      },
    });
    this.adFG.enable();
    this.loading = false;
  }
}
