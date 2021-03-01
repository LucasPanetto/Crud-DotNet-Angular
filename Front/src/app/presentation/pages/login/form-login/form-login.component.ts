import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private requestService: RequestService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  tryLogin() {
  /*   if (this.loginForm.invalid) {
      console.log('is invalid')
      this.loginForm.markAllAsTouched()
      return
    }

    console.log('Indo pra HOME')
    this.router.navigate(['home']);
 */
  }

}
