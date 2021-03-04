import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Front';
  isAuthenticated = false;

  constructor(private authService: AuthService, private toastr: ToastrService) {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.isAuthenticated = loggedIn
      }
    })
  }

  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
