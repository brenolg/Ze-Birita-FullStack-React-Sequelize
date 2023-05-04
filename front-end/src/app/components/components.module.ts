import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormComponent]
})
export class ComponentsModule { }
