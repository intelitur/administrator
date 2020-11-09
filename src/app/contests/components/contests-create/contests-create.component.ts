import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/general-services/common.service";
import { MultimediaService } from "src/app/general-services/multimedia.service";
import { Contests } from "../../models/Contest";
import { ContestsService } from "../../services/contests.service";

@Component({
  selector: "app-contests-create",
  templateUrl: "./contests-create.component.html",
  styleUrls: ["./contests-create.component.scss"],
})
export class ContestsCreateComponent implements OnInit {
  contestsFG: FormGroup;
  private subscription: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  today: any = new Date();
  loading: boolean = false;

  contestImages = [];
  contestImagesFinal = [];
  imageIndex = 0;

  constructor(
    public dialogRef: MatDialogRef<ContestsCreateComponent>,
    public commonService: CommonService,
    public multimediaService: MultimediaService,
    public router: Router,
    public contestsService: ContestsService
  ) {
    this.contestsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  onNoClick() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    let initalDate = this.formatDates(this.start_Date);
    let finalDate = this.formatDates(this.end_Date);
    let contest: Contests = {
      name: this.contestsFG.controls["name"].value,
      detail: this.contestsFG.controls["details"].value,
      initial_date: initalDate,
      final_date: finalDate,
    };
    console.log(contest);
    this.createContest(contest);
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date;
  };

  createContest(contest: Contests) {
    this.loading = true;
    this.contestsFG.disable();
    this.contestsService.createContest(contest).subscribe({
      next: async (data: any) => {
        console.log(data);
        if (data.status == 201) {
          await this.addImagesToEvent(data.body[0]);
          this.commonService.openSnackBar(
            `El concurso ${this.contestsFG.value.name} se ha creado`,
            "OK"
          );
          this.loading = true;
          this.dialogRef.close();
          this.router.navigate([`/contests/${data.body[0]}`]);
        } else {
          this.commonService.openSnackBar(
            `Error al crear el concurso: ${data.error}`,
            "OK"
          );
          this.contestsFG.enable();
          this.loading = true;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
        this.contestsFG.enable();
        this.loading = true;
      },
    });
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

  getFiles(event: any) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i]) {
          this.contestImagesFinal.push(event.target.files[i]);

          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[i]);

          reader.onload = (event: any) => {
            this.contestImages.push(event.target.result);
          };
        }
      }
    }
  }

  async uploadFiles() {
    let images = [];
    for (let i = 0; i < this.contestImagesFinal.length; i++) {
      await this.commonService
        .uploadFile(this.contestImagesFinal[i])
        .then((data: any) => {
          images.push(data.filename);
        });
    }
    return images;
  }

  onSlide(event) {
    this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
  }

  deleteImage() {
    if (this.contestImages.length == 1) {
      this.imageIndex = 0;
    }
    this.contestImages.splice(this.imageIndex, 1);
    this.contestImagesFinal.splice(this.imageIndex, 1);
  }

  async addImagesToEvent(event_id) {
    let urlImages = await this.uploadFiles();

    for (let i = 0; i < urlImages.length; i++) {
      await this.multimediaService
        .addImage(event_id, 5, urlImages[i])
        .toPromise();
    }
  }
}
