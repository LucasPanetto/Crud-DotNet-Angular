import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-menu',
  templateUrl: './the-menu.component.html',
  styleUrls: ['./the-menu.component.sass']
})
export class TheMenuComponent implements OnInit {
  public actualRouter: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.actualRouter = this.router
  }

}
