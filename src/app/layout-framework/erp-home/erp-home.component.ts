import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/module/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erp-home',
  templateUrl: './erp-home.component.html',
  styleUrls: ['./erp-home.component.scss']
})
export class ErpHomeComponent implements OnInit {
  alarmCount = 0;

  constructor(public authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  modifyPassword() {
    
  }
}
