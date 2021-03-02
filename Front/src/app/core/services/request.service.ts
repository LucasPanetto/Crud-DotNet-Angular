import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from "../../../environments/environment" // Change this to your file location
@Injectable({
    providedIn: 'root'
})

export class RequestService {

    defaultUrl = environment.baseUrl;
    loginUrl = 'https://dev.sitemercado.com.br/api/login'

    constructor(private httpClient: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    login(username: string, password: string): Observable<any> {
        const customHttpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Basic ` + btoa(username + ':' + password) })
        }

        return this.httpClient.post<any>(this.loginUrl, null, customHttpOptions).pipe(retry(2),
            catchError(this.handleError))
    }

    get(): Observable<any> {
        return this.httpClient.get<any>(this.defaultUrl)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    post(entity: any): Observable<any> {
        return this.httpClient.post<any>(this.defaultUrl, JSON.stringify(entity), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    put(entity: any): Observable<any> {
        return this.httpClient.put<any>(this.defaultUrl + '/' + entity.id, JSON.stringify(entity), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    deleteCar(entity: any) {
        return this.httpClient.delete<any>(this.defaultUrl + '/' + entity.id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}