import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  remember: boolean;

  loginErrorMessage: string;

  constructor(private titleService: Title,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    //this.message = 'Trying to log in ...';

    this.authService.login(this.userName, this.password, this.remember).subscribe(() => {
      //this.setMessage();
      if (this.authService.isLoggedIn) {
        //还要加上公司信息
        this.titleService.setTitle(`产销存系统-${this.authService.user.userName} 欢迎你`);//要取得用户信息后，显示具体的内容

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
      else {
        this.loginErrorMessage = this.authService.message;
      }
    },
      err => {
        console.error(err);
        this.loginErrorMessage = err;
      },
      () => {
        console.log("login complete");
      }
    );
  }
}
