import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
/* import { ServerService } from './server.service'
 */import { catchError } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs'
/* import * as jwt_decode from 'jwt-decode'
 */import { UserModel } from '../domain/user.model'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false)

  /*  constructor(private http: HttpClient, private server: ServerService) {
     this.loggedIn.next(this.getToken() ? true : false)
   } */

  /* loginUser(params: UserModel) {
    return this.http
      .post<any>(this.server.url(`/Login`), params)
      .pipe(catchError(this.server.handleError))
  }

  forgotPassword(userName: string) {
    return this.http
      .post<any>(this.server.url(`/Login/senha/resetar`), userName)
      .pipe(catchError(this.server.handleError))
  }

  getToken(): string {
    return localStorage.getItem('access-token')
  }

  logout(): void {
    localStorage.clear()
    window.location.reload()
  }

  decode() {
    let token = { sid: '', id: '' }
    if (this.getToken()) {
      token = jwt_decode(this.getToken())
      return token
    }
    return token
  }

  refreshToken() {
    const { id } = this.decode()
    const refreshToken = localStorage.getItem('refresh-token')

    return this.http
      .post<any>(this.server.url('/Login'), {
        userName: id,
        password: refreshToken,
        grantTypes: 'refresh_token',
        resultado: 0,
      })
      .pipe(catchError(this.server.handleError))
  }*/

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }

  /*  getDataUser(): DataUser {
     return JSON.parse(localStorage.getItem('user'))
   }  */
}
