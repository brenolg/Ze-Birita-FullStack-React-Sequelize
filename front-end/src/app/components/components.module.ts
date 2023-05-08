import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormComponent, HeaderComponent]
})
export class ComponentsModule { }
