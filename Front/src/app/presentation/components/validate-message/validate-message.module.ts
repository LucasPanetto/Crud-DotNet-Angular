import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateMessageComponent } from "./validate-message.component";

@NgModule({
  declarations: [ValidateMessageComponent],
  imports: [FormsModule, ReactiveFormsModule,CommonModule ],
  exports: [ValidateMessageComponent],
})

export class ValidateMessageModule { }
