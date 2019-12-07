import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
  private static JWTS_Authentication_Scheme = "Bearer ";

  constructor(private httpClient: HttpClient) { }

  apiPut<T>(url, headPara?: { [key: string]: any; }, bodyPara?: any, token?: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
      }),
      params: new HttpParams()
    }

    if (token != null && token != undefined) {
      httpOptions.headers = httpOptions.headers.set('Authorization', HttpclienthelperService.JWTS_Authentication_Scheme + token);
    }

    if (headPara != null && headPara != undefined) {
      for (let p in headPara) {
        httpOptions.params = httpOptions.params.set(p, headPara[p]);
      }
    }

    return this.httpClient.put<T>(url, bodyPara, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  apiPost<T>(url, headPara?: { [key: string]: any; }, bodyPara?: any, token?: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
      }),
      params: new HttpParams()
    }

    if (token != null && token != undefined) {
      httpOptions.headers = httpOptions.headers.set('Authorization', HttpclienthelperService.JWTS_Authentication_Scheme + token);
    }

    if (headPara != null && headPara != undefined) {
      for (let p in headPara) {
        httpOptions.params = httpOptions.params.set(p, headPara[p]);
      }
    }

    return this.httpClient.post<T>(url, bodyPara, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  apiGet<T>(url, headPara?: { [key: string]: any; }, token?: string): Observable<T> {
    //url = HttpclienthelperService.SERVER_BASEADDRESS + url;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
      }),
      params: new HttpParams()
    }
    if (token != null && token != undefined) {
      httpOptions.headers = httpOptions.headers.set('Authorization', HttpclienthelperService.JWTS_Authentication_Scheme + token);
    }
    if (headPara != null && headPara != undefined) {
      for (let p in headPara) {
        httpOptions.params = httpOptions.params.set(p, headPara[p]);
      }
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