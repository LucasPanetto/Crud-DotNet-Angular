import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component'
import { TheButtonModule } from '../../components/the-button/the-button.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TheButtonModule
  ],
})

export class HomeModule { }
