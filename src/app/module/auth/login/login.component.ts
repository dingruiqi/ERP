import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  onSubmit(signinForm: NgForm) {
    //还要加上公司信息
    this.titleService.setTitle(`产销存系统-${this.user.userName} 欢迎你`);//要取得用户信息后，显示具体的内容
  }
}
