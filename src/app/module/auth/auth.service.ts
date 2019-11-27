import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { SystemInfo } from 'src/app/model/system-info';
import { HttpclienthelperService } from 'src/app/common/webAPI/httpclienthelper.service';
import { Result } from 'src/app/model/result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  redirectUrl: string;

  private token: string;

  user: User = new User();
  systemInfo: SystemInfo = new SystemInfo();

  message: string;

  constructor(private httpClientHelper: HttpclienthelperService) { }

  login(userName: string, password: string): Observable<boolean> {
    let url: string = "api/Privilege/auth/";

    return Observable.create(observer => {
      try {
        this.httpClientHelper.apiPost<Result>(url, null, { userName: userName, password: password }).subscribe(next => {
          if (next.state == 0) {
            this.isLoggedIn = true;
            this.user = next.data;
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

    //eturn of(true);//调用api获取验证
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
