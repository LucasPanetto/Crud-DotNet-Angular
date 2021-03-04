import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginResultModel } from 'src/app/core/domain/loginResult.model';
import { UserModel } from 'src/app/core/domain/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private requestService: RequestService, private toastr: ToastrService, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  tryLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return
    }

    const userLoggin = this.loginForm.value as UserModel;

    this.requestService.login(userLoggin.userName, userLoggin.password).subscribe((data: LoginResultModel) => {
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(userLoggin))
        this.authService.loggedIn.next(true)
        this.router.navigate(['/products']);
      } else {
        this.toastr.warning(data.error, 'Atenção!');
      }
    })
  }

}
