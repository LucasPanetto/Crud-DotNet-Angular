import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Front';
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.isAuthenticated = loggedIn
      }
    })
  }
}
