import { AuthService } from './../services/auth.service'
import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  CanLoad,
} from '@angular/router'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn(state)
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn()
  }

  private isLoggedIn(state?: RouterStateSnapshot) {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          if (state?.url !== '/login') {
            this.router.navigate(['/login'])
            return false
          }
        } else if (state?.url === '/login') {
          this.router.navigate(['/products'])
        }
        return true
      })
    )
  }
}
