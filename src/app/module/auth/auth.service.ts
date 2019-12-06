import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
//import { SystemInfo } from 'src/app/model/system-info';
import { HttpclienthelperService } from 'src/app/common/webAPI/httpclienthelper.service';
import { Result } from 'src/app/model/result';
import { CryptogramHelpService } from 'src/app/common/cryptogram/cryptogram-help.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  redirectUrl: string;

  token: string;

  user: User = new User();
  //systemInfo: SystemInfo = new SystemInfo();

  message: string;

  constructor(private httpClientHelper: HttpclienthelperService, private cryptogramHelper: CryptogramHelpService) { }

  login(userName: string, password: string): Observable<boolean> {
    let url: string = "api/Privilege/auth/";

    password = this.cryptogramHelper.md5Hash(password);

    return Observable.create(observer => {
      try {
        this.httpClientHelper.apiPost<Result>(url, null, { userName: userName, password: password }).subscribe(next => {
          if (next.state == 0) {
            this.isLoggedIn = true;
            this.user = next.data.user;
            this.token = next.data.token;
          }
          else {
            //observer.error(next.message);
            this.isLoggedIn = false;
          }

          this.message = next.message;

          observer.next(true);
          observer.complete();
        }, error => {
          this.message = error;

          observer.error(false);
          observer.complete();
        });

      } catch (e) {
        this.message = e.message;

        observer.error(false);
        observer.complete();
      }

    });

    //return of(true);//调用api获取验证
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = "";
    this.user = null;
    this.message = "";
    this.redirectUrl = "";
  }
}
