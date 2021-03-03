import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginRoutingModule } from './login-routing.module'

import { LoginComponent } from './login.component'
import { FormLoginComponent } from './form-login/form-login.component'
import { AsideLoginComponent } from './aside-login/aside-login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TheButtonModule } from '../../components/the-button/the-button.module';
import { ValidateMessageModule } from '../../components/validate-message/validate-message.module'
import { ToastrModule } from 'ngx-toastr'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [LoginComponent, FormLoginComponent, AsideLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    TheButtonModule,
    ReactiveFormsModule,
    ValidateMessageModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})

export class LoginModule { }
