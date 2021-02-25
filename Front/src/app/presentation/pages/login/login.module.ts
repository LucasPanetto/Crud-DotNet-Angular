import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginRoutingModule } from './login-routing.module'

import { LoginComponent } from './login.component'
import { FormLoginComponent } from './form-login/form-login.component'
import { AsideLoginComponent } from './aside-login/aside-login.component'
import { TheInputComponent } from '../../components/the-input/the-input.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, FormLoginComponent, AsideLoginComponent, TheInputComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
})

export class LoginModule { }
