import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { UserModel } from '../domain/user.model'
import { LoginResultModel } from '../domain/loginResult.model'
import { RequestService } from './request.service'

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
    if (localStorage.getItem('user')) {
      const storageUser: UserModel = JSON.parse(localStorage.getItem('user') || '{}');
      const isValid = this.requestService.login(storageUser?.userName, storageUser.password).subscribe((data: LoginResultModel) => { return data.success })
      return isValid ? true : false
    }
    return false
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }


  /*  getDataUser(): DataUser {
     return JSON.parse(localStorage.getItem('user'))
   }  */
}
