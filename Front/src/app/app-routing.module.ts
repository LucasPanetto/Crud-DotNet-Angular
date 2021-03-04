import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./presentation/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./presentation/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./presentation/pages/products/products.module').then((m) => m.ProductsModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
