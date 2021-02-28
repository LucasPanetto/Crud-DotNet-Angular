import { NgModule } from "@angular/core";
import { TheInputComponent } from "./the-input.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TheInputComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [TheInputComponent],
})

export class TheInputModule { }
