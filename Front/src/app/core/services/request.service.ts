import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    defaultUrl = 'http://localhost:3000/cars';

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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