import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/module/auth/auth.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-erp-home',
  templateUrl: './erp-home.component.html',
  styleUrls: ['./erp-home.component.scss']
})
export class ErpHomeComponent implements OnInit {
  alarmCount = 0;

  focusedTabIndex = 0;//正在激活的tab索引
  tabs = [{ tabName: '首页', tabContent: 'welcome' },
  { tabName: '新手指引', tabContent: 'guide' }];

  constructor(public authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    //判断是否要自动登陆
    if (!this.authService.hasInit) {
      this.authService.initUser().subscribe(next => {
        if (!next) {
          this.authService.logout();
          this.router.navigateByUrl("/login");
        }
      }, error => {
        this.authService.logout();
        this.router.navigateByUrl("/login");
      });
    }
  }


  closeTab(tab: string): void {
    let index = this.tabs.findIndex(t => t.tabName == tab);
    if (index != -1) {
      this.tabs.splice(index, 1);
    }

  }

  newTab(tabName: string): void {
    this.tabs.push({ tabName: tabName, tabContent: 'abc' });
    this.focusedTabIndex = this.tabs.length - 1;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  modifyPassword() {

  }
}
