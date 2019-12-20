import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
//import { SystemInfo } from 'src/app/model/system-info';
import { HttpclienthelperService } from 'src/app/common/webAPI/httpclienthelper.service';
import { Result } from 'src/app/model/result';
import { CryptogramHelpService } from 'src/app/common/cryptogram/cryptogram-help.service';
import { LocalStorageHelperService } from 'src/app/common/local-storage/local-storage-helper.service';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

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

  constructor(private httpClientHelper: HttpclienthelperService,
    private cryptogramHelper: CryptogramHelpService,
    private localStorageService: LocalStorageHelperService) {

    if (!this.isLoggedIn) {
      let userID: number = this.localStorageService.getObject("user");
      let token: string = this.localStorageService.get("token");
      if (token != undefined && token != null && token != "") {
        //判断是否过期
        //const decodedToken = helper.decodeToken(token);
        //const expirationDate = helper.getTokenExpirationDate(token).toUTCString();
        const isExpired = helper.isTokenExpired(token);

        if (!isExpired) {
          this.token = token;
          this.isLoggedIn = true;
          this.user.userID = userID;
        }
        else {
          this.localStorageService.removeAll();
        }
      }
    }

  }

  get hasInit() {
    return !(this.isLoggedIn
      && this.user.userID != 0
      && this.user.currentLoginTime == undefined);
  }

  initUser(userID: number = null): Observable<boolean> {
    //只有当使用token登陆时，需要当前页面主动去初始化用户信息 
    if (userID == null) {
      userID = this.user.userID;
    }
    let url: string = `api/Privilege/user/${userID}/`;
    return Observable.create(observer => {
      try {
        this.httpClientHelper.apiGet<Result>(url, null, this.token).subscribe(next => {
          if (next.state == 0) {
            this.user = next.data;
          }
          else {
            //this.logout();
          }

          observer.next(true);
          observer.complete();
        }, error => {
          console.error("initUser" + error);
          //this.logout();
          observer.error(false);
          observer.complete();
        })
      } catch (e) {
        console.error("initUser" + e);

        observer.error(false);
        observer.complete();
      }
    });
  }

  login(userName: string, password: string, remember: boolean): Observable<boolean> {
    let url: string = "api/Privilege/auth/";

    password = this.cryptogramHelper.md5Hash(password);

    return Observable.create(observer => {
      try {
        this.httpClientHelper.apiPost<Result>(url, null, { userName: userName, password: password }).subscribe(next => {
          if (next.state == 0) {
            this.isLoggedIn = true;
            this.user = next.data.user;
            this.token = next.data.token;
            // if (this.token != null || this.token != undefined) {
            //   //自动登陆时，使用本地的token，并且不覆盖
            //   this.token = next.data.token;
            // }
            if (remember) {
              this.localStorageService.setObject("user", this.user.userID);
              this.localStorageService.set("token", this.token);
            }
            else {
              this.localStorageService.removeAll();
            }
          }
          else {
            //observer.error(next.message);
            this.isLoggedIn = false;
            this.token = null;

            this.localStorageService.removeAll();
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

    this.localStorageService.removeAll();
  }
}
