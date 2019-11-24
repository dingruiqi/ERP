import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpclienthelperService {

  private static METHOD_DELTE = 'DELETE';
  private static METHOD_POST = 'POST';
  private static METHOD_GET = 'GET';
  private static METHOD_PUT = 'PUT';
  private static SERVER_BASEADDRESS = 'http://localhost:8090/';

  constructor(private httpClient: HttpClient) { }

  apiGet<T>(url, token?: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
      })
    }
    if (token != null && token != undefined) {
      httpOptions.headers.set('Authorization', 'my-new-auth-token');
    }
    return this.httpClient.get<T>(url, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}