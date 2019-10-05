import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatFormFieldModule,  } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatCardModule, MatFormFieldModule],
  exports: [MatInputModule, MatCardModule, MatFormFieldModule]
})
export class MaterialModule {}
