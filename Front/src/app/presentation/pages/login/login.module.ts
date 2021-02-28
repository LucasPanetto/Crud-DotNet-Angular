import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginRoutingModule } from './login-routing.module'

import { LoginComponent } from './login.component'
import { FormLoginComponent } from './form-login/form-login.component'
import { AsideLoginComponent } from './aside-login/aside-login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TheInputModule } from '../../components/the-input/the-input.module'
import { TheButtonModule } from '../../components/the-button/the-button.module';
import { ValidateMessageModule } from '../../components/validate-message/validate-message.module'

@NgModule({
  declarations: [LoginComponent, FormLoginComponent, AsideLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    TheInputModule,
    TheButtonModule, ReactiveFormsModule, ValidateMessageModule
  ],
})

export class LoginModule { }
