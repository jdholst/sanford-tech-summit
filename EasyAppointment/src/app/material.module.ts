import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
})
export class MaterialModule {}
