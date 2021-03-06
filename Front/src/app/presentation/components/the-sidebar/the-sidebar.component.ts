import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-the-sidebar',
  templateUrl: './the-sidebar.component.html',
  styleUrls: ['./the-sidebar.component.sass'],
})
export class TheSidebarComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}