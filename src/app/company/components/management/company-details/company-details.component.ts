import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";
import { Company } from "src/app/company/models/Company";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CompanyService } from "src/app/company/services/company.service";
import { CommonService } from "src/app/general-services/common.service";
import { HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.scss"],
})
export class CompanyDetailsComponent implements OnInit, AfterViewInit {
  @Input() company: Company;
  companyForm: FormGroup;

  loading = false;

  constructor(
    private cd: ChangeDetectorRef,
    private companyService: CompanyService,
    private commonService: CommonService
  ) {
    this.companyForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      legal_id: new FormControl(null, [
        Validators.required,
        Validators.pattern("^([1-9][0-9]{9})$"),
      ]),
      phone_number: new FormControl(
        null,
        Validators.pattern("^([0-9]{4}[ ][0-9]{4})$")
      ),
      email: new FormControl(
        null,
        Validators.pattern("^(.{1,})[@](.{1,})[.](.{1,})$")
      ),
      location: new FormControl(),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.companyForm.patchValue(this.company);
    this.cd.detectChanges();
  }

  changeState({ source }: any) {
    this.loading = true;
    this.companyForm.disable();

    if (this.company.state) {
      this.commonService
        .confirmationDialog(
          `¿Desea eliminar la empresa: ${this.company.name}?`
        )
        .then(async (result) => {
          if (result) {
            this.companyService.chageCompanyState(this.company).subscribe({
              next: (data: any) => {
                this.loading = false;
                this.companyForm.enable();
                if (data.status == 204) {
                  this.company.state = !this.company.state;
                  source.checked = this.company.state;
                  this.commonService.openSnackBar(
                    `La empresa ${this.company.name} ha sido activada`,
                    "OK"
                  );
                } else {
                  this.commonService.openSnackBar(
                    `Error al cambiar el estado: ${data.error}`,
                    "OK"
                  );
                  this.loading = true;
                  this.companyForm.disable();
                }
              },
              error: (err: HttpErrorResponse) => {
                this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
                source.checked = this.company.state;
                this.loading = false;
                this.companyForm.enable();
              },
            });
          } else {
            source.checked = this.company.state;
            this.loading = false;
            this.companyForm.enable();
          }
        });
    } else {
      this.commonService.openSnackBar(
        "No se puede reactivar una empresa",
        "OK"
      );
      source.checked = this.company.state;
      this.loading = false;
      this.companyForm.enable();
    }
  }

  applyChanges() {
    this.loading = true;
    this.companyForm.disable();
    let company = {
      ...this.company,
      ...this.companyForm.value,
    };
    this.companyService.updateCompany(company).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.companyForm.enable();
          this.company = company;
          this.commonService.openSnackBar(
            `La empresa ${this.company.name} ha sido cambiada`,
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
        this.companyForm.enable();
      },
    });
  }

  isChanged(): boolean {
    let old = {
      name: this.company.name,
      legal_id: this.company.legal_id,
      phone_number: this.company.phone_number,
      email: this.company.email,
      location: this.company.location,
    };
    return !(JSON.stringify(old) === JSON.stringify(this.companyForm.value));
  }

  async addImg(files: FileList) {
    this.loading = true;
    this.companyForm.disable();
    let img = this.company.image;
    await this.commonService.uploadFile(files[0]).then((data: any) => {
      this.company.image = 
        environment.IMAGES_URL_BASE + data.filename;
    });
    this.imageChanges(img);
  }

  deleteImg() {
    let img = this.company.image;
    this.company.image = "";
    this.imageChanges(img);
  }

  imageChanges(oldImg) {
    this.loading = true;
    this.companyForm.disable();

    this.companyService.updateCompany(this.company).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.loading = false;
          this.companyForm.enable();
          this.commonService.openSnackBar(
            `La empresa ${this.company.name} ha sido cambiada`,
            "OK"
          );
        } else {
          this.company.image = oldImg;
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.loading = false;
        this.companyForm.enable();
      },
    });
  }
}
