import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TheButtonComponent } from "./the-button.component";

@NgModule({
  declarations: [TheButtonComponent],
  imports: [CommonModule],
  exports: [TheButtonComponent],
})

export class TheButtonModule {}
