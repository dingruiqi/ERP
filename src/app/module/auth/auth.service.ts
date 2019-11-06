import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return of(true);//调用api获取验证
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
