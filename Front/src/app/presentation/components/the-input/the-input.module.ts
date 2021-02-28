import { NgModule } from "@angular/core";
import { TheInputComponent } from "./the-input.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TheInputComponent],
  imports: [FormsModule],
  exports: [TheInputComponent],
})

export class TheInputModule { }
