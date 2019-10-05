import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatButton } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  exports: [MatInputModule, MatCardModule, MatFormFieldModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
