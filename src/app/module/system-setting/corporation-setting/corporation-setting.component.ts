import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SystemInfo } from 'src/app/model/system-info';
import { HttpclienthelperService } from 'src/app/common/webAPI/httpclienthelper.service';
import { Result } from 'src/app/model/result';

@Component({
  selector: 'app-corporation-setting',
  templateUrl: './corporation-setting.component.html',
  styleUrls: ['./corporation-setting.component.scss']
})
export class CorporationSettingComponent implements OnInit {

  init: boolean = false;
  initResult: string;
  save: boolean = true;
  saveResult: string;
  corporationInfo: SystemInfo = new SystemInfo();

  constructor(private authService: AuthService, private httpClientHelper: HttpclienthelperService) {
    //this.corporationInfo = authService.systemInfo;
  }

  ngOnInit() {
    this.getSystemSetInfo();
  }

  private getSystemSetInfo() {
    let url: string = "api/systeminfo/";

    this.httpClientHelper.apiGet<Result>(url, null, this.authService.token).subscribe(next => {
      if (next.state == 0) {
        this.corporationInfo = next.data;

        this.init = true;
      }
      else {
        this.init = false;
        this.initResult = next.message;
      }
    }, error => {
      this.init = false;
      this.initResult = error;
    });
  }

  onSubmit() {
    let url: string = "api/systeminfo/";

    this.httpClientHelper.apiPut<Result>(url, null, this.corporationInfo, this.authService.token).subscribe(next => {
      if (next.state != 0) {
        //失败了
        this.save = false;
        this.saveResult = next.message;
      }
      else {
        //成功了
        this.save = true;
        this.saveResult = "保存系统资料成功！";
      }
    }, error => {
      this.save = false;
      this.saveResult = error;
    });
  }
}
