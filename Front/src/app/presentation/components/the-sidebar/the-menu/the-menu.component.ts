import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/core/domain/menu.model';

@Component({
  selector: 'app-the-menu',
  templateUrl: './the-menu.component.html',
  styleUrls: ['./the-menu.component.sass']
})
export class TheMenuComponent implements OnInit {
  actualRouter: any;
  menuList: MenuModel[] = [{ title: 'Home', route: '/home', icon: 'fas fa-home' }, { title: 'Produtos', route: '/products', icon: 'fas fa-list' }];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.actualRouter = this.router
  }

}
