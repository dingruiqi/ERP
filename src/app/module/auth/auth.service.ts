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

  constructor(private httpClientHelper: HttpclienthelperService) { }

  login(): Observable<boolean> {
    //https://blog.csdn.net/qq_35592166/article/details/78281030
    let url: string = "api/Privilege/user/";
    this.httpClientHelper.apiGet<Result>(url).subscribe(next => {
      if (next.state == 0) {

      }
      else {

      }
    });
    return of(true);//调用api获取验证
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
