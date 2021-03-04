import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { UserModel } from '../domain/user.model'
import { LoginResultModel } from '../domain/loginResult.model'
import { RequestService } from './request.service'
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false)

  constructor(private requestService: RequestService) {
    this.loggedIn.next(this.isValidLogged() ? true : false)
  }

  logout(): void {
    localStorage.clear()
    window.location.reload()
  }

  isValidLogged(): boolean {
    let isValid = false;

    if (localStorage.getItem('user')) {
      const storageUser: UserModel = JSON.parse(localStorage.getItem('user') || '{}');

      isValid = storageUser ? true : false

      return isValid
    }
    return isValid
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }
}
