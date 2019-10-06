import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule]
})
export class MaterialModule {}
