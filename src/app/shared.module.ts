import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
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
  MatTabsModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
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
    LeafletModule.forRoot()
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
    LeafletModule
  ]
})
export class SharedModule {}
