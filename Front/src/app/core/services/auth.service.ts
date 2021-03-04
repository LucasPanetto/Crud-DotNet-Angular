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

    this.isValidLogged().then(data => {
      this.loggedIn.next(data);
    })
  }

  logout(): void {
    localStorage.clear()
    window.location.reload()
  }

  async isValidLogged() {
    try {
      if (localStorage.getItem('user')) {
        const storageUser: UserModel = JSON.parse(localStorage.getItem('user') || '{}');
        const result = await this.runValidLogin(storageUser) as LoginResultModel;

        return result.success
      }
      return false
    } catch (error) {
      return false;
    }
  }

  runValidLogin(storageUser: UserModel) {
    return new Promise(async (resolve, reject) => {
      await this.requestService.login(storageUser?.userName, storageUser?.password).subscribe((data: LoginResultModel) => { resolve(data) })
    });
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }


  /*  getDataUser(): DataUser {
     return JSON.parse(localStorage.getItem('user'))
   }  */
}
