import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatFormFieldModule, 
  MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatCardModule, MatFormFieldModule, 
    MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, MatCheckboxModule],
  exports: [MatInputModule, MatCardModule, MatFormFieldModule, 
    MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, MatCheckboxModule]
})
export class MaterialModule {}
