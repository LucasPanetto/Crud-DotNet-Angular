import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'

import { TheInputComponent } from '../../components/the-input/the-input.component'
import { FormsModule } from '@angular/forms';
import { TheButtonComponent } from '../../components/the-button/the-button.component'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent, TheInputComponent, TheButtonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
})

export class HomeModule { }
