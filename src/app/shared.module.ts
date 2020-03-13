import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { FileUploadModule } from 'ng2-file-upload';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule,
  MatTableModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatAutocompleteModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    NgbCarouselModule,
    MatChipsModule,
    DragDropModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FileUploadModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatAutocompleteModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    NgbCarouselModule,
    MatChipsModule,
    DragDropModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FileUploadModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatAutocompleteModule
  ]
})
export class SharedModule {}
