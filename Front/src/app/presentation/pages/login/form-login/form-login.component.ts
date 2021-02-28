import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]], //wsilvas
      password: ['Kg#84bbbcb8', Validators.required], //Kg#84bbbcb8
    })
  }

  ngOnInit(): void {
  }

  tryLogin() {
    if (this.loginForm.invalid) {
      console.log('is invalid')
      this.loginForm.markAllAsTouched()
      return
    }

    console.log('Indo pra HOME')
    this.router.navigate(['home']);

  }

}
